const functions = require("firebase-functions");

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