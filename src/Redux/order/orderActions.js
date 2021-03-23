import { firestore, serverTimeStamp } from "../../Firebase/Firebase";
import history from "./../../history/history";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IXm2GDRuttKHQxW9PfFpEY0lSPGpVzrpVciaStRjd83byL8BUEdqdUf9H2ikbTIKfWjyofXDUQICXbOIK0eQsF000BRGZoID8")
export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth } = getState();
    if (auth) {
      var orderInfo = {
        createAt: serverTimeStamp(),
        orderStatus: "pending",
        orderedBy: auth.uid,
      };
      console.log(orderInfo);
      var order = await firestore.collection("orders").add(orderInfo);
      history.push(`/checkout/${order.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export var processOrder = ({ orderId, addressInfo }) => async (
  dispatch,
  getState
) => {
  try {
    const stripe = await stripePromise;
    //update order info
    var { cart } = getState();
        //TODO: REMOVE HARD CODED ORDER ID
    await firestore
      .collection("orders")
      .doc(orderId)
      .update({ addressInfo, cart });
    orderId = "8SMkDO5bYaFKCBhr8XZT"
    //call stripe session API
    // var data = await axios.get(
    //   "http://localhost:5001/xcart-react-js/us-central1/generateCheckoutSession",{orderID});
    var response = await fetch("http://localhost:5001/xcart-react-js/us-central1/generateCheckoutSession",{
        method:"POST",
        body: JSON.stringify({orderId})
    })
    var {data:{session}} = await response.json()
    // console.log(session);
    // Redirect to Stripe payment page
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
  } catch (error) {
    console.log(error);
  }
};

