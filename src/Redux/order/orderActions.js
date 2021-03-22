import { firestore,serverTimeStamp } from '../../Firebase/Firebase';
import history from './../../history/history';
export var generateOrder = () => async(dispatch, getState) => {
    try {
        var {auth} = getState();
        if(auth){
            var orderInfo = {
                createAt: serverTimeStamp(),
                orderStatus: "pending",
                orderedBy: auth.uid
            };
            console.log(orderInfo);
            var order = await firestore.collection("orders").add(orderInfo)
            history.push(`/checkout/${order.id}`)
        }
    } catch (error) {
        console.log(error)
    }
}

export var updateOrderInfo = ({orderId, addressInfo}) => async(dispatch, getState) =>{
    try {
        var {cart} = getState();
        await firestore.collection("orders").doc(orderId).update({addressInfo,cart});
        console.log("done updating");
    } catch (error) {
        console.log(error);
    }
}