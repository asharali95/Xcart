const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_51IXm2GDRuttKHQxWNkBrL5QarvcjAxiRmoUQcVNzRktqvMcHX4A8XhHqb0ycjmg3DRf6oFbokOqbgW254F3DDJMq00v4zWM059")
const admin = require("firebase-admin");

admin.initializeApp()

const firestore = admin.firestore();
exports.userCreated = functions.auth.user().onCreate((user) =>{
    console.log("user added...");
    return Promise.resolve;
})
exports.userDeleted = functions.auth.user().onDelete((user) =>{
    console.log(user);
    console.log("user Deleted...")
   return Promise.resolve;
    //feedbaack email
})

// firestore trigger

exports.createOrder = functions.firestore.document("/orders/{docId}").onCreate ((snap,context) =>{
    console.log(snap.data())
    console.log(context);
    return Promise.resolve;
})

exports.updateOrder = functions.firestore.document("/orders/{docId}").onUpdate ((snap,context) =>{
    console.log(snap.before.data())
    console.log(snap.after.data())
    console.log(context.params.docId);
    return Promise.resolve;
})
exports.deleteOrder = functions.firestore.document("/orders/{docId}").onDelete((snap,context) =>{
    console.log(snap.data())
    console.log(context.params.docId); 
    return Promise.resolve;
})



//HTTPS triggers for making an API

exports.sayHello = functions.https.onRequest((req, res) =>{
    res.status(200).json({
        message: "Hello"
    })
    return Promise.resolve;
})

exports.printMyName  = functions.https.onRequest((req, res) =>{
    var data = req.body;
    res.status(200).json({
        msg: `Hello ${data.name}`
    })
    return Promise.resolve;
})

var shapeCartItems = (cart) =>{
    return cart.map(({title,coverPhoto,quantity,cost}) =>({
        price_data: {
            currency: 'usd',
            product_data: {
              name: title,
              images: [coverPhoto],
            },
            unit_amount: cost*100, //always in cents
          },
          quantity,
    }))

}
exports.generateCheckoutSession = functions.https.onRequest(async(req, res) =>{
    try {
        var body = JSON.parse(req.body);
        var {orderId} = body
        //fetch order
        var query = await firestore.collection("orders").doc(orderId).get();
        var order = query.data();
        //shape cartItem:
        var line_items = shapeCartItems(order.cart)

        //generate stripe session with that amount
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `https://facebook.com`,
            cancel_url: `https://facebook.com`,
            metadata:{
                orderId
            }
          });
        //send session to front end
        res.set({'Access-Control-Allow-Origin':'*'}).status(200).json({
            data:{
                session
            } 
        }) 
    } catch (error) {
        res.set({'Access-Control-Allow-Origin':'*'}).status(401).json({
           error
        })   
    }
})


// STRIPE HOOK CLOUD FUNCTION API WHICH ONLY BE TRIGGERED BY
//STRIPE ITSELF THAT'S WHY IT NEEDS TO BE DEPLOYED PUBLICLY

// exports.stripeWebhooks = functions.https.onRequest(async(req,res) =>{
//     try {
//         const sig = req.headers['stripe-signature'];
//         var event;
//         try{
//             event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeEndPoint);
//         }
//       catch(error){
//         res.status(401).json({
//             error: error.message
//         })
//         }

//         if(event.type === "checkout.session.completed"){
//             console.log("got payment");
//             //fetch orderId from session
//             var sessionData = event.data.object;
//             var orderId = sessionData.metadata.orderId;
//             var query = await firestore.collection("orders").doc(orderId).get()
//             var {cart} = query.data();

//             //update Inventory(products)
//             //Simple technique
//             for(var {quantity: quantityBought,id: productId} of cart){
//                 await firestore.collection("products").doc(productId).update({
//                     quantity: admin.firestore.FieldValue.increment(-quantityBought)
//                 })
//             }
//             //Can be achieve same thing with parallelism

//             // var promiseArr = cart.map(({quantity: quantityBought,id: productId}) =>{
//             //     await firestore.collection("products").doc(productId).update({
//             //         quantity: admin.firestore.FieldValue.increment(-quantityBought)
//             //     })
//             // })
//             // await Promise.all(promiseArr);


//             // update order status completed
//             await firestore.collection("orders").doc(orderId).update({
//                 orderStatus: "completed"
//             })
//         }
//         else{
//             console.log("payment rejected");
//         }
//     } catch (error) {
        
//         res.status(401).json({
//             error: error.message
//         })
//     }
// })