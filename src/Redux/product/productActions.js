import { firestore, firestoreStorage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { serverTimeStamp } from "./../../Firebase/Firebase";
import { CLEAR_PRODUCTS, SET_PRODUCTS } from "./productConstants";

// ADMIN SIDE STUFF

export var uploadProduct = (productObj) => async () => {
  try {
    // steps:
    // 1. send file to storage and get download URL
    // 2. Modify productObj with coverPhoto url and createdAt
    // 3. Create doc in firestore

    var imageRef = firestoreStorage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObj.coverPhoto);
    // fileListener.on(event_type,
    //  (callback) file state,
    // (callback) error ,
    //  will trigger while upload)
    fileListener.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => console.log(error),
      async () => {
        var downloadURL = await imageRef.getDownloadURL();
        productObj.coverPhoto = downloadURL;
        productObj.createdAt = serverTimeStamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        await firestore.collection("products").add(productObj);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export var fetchProducts = () => async (dispatch) => {
  try {
    var query = await firestore.collection("products").get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push(doc.data());
    });
    // console.log(categorizedProduct(products));
    dispatch({
      type: SET_PRODUCTS,
      payload: {
        products, // array
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export var fetchCategoryProducts = (category)=>async(dispatch)=>{
  try {
    var query = await firestore.collection("products").where("category","==",category).get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push(doc.data());
    });
    dispatch({
      type: SET_PRODUCTS,
      payload: {
        products, // array
      },
    });
  } catch (error) {
    console.log(error)
  }
}

export var clearProducts = () =>async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PRODUCTS,
    })
  } catch (error) {
    console.log(error)
  }
}