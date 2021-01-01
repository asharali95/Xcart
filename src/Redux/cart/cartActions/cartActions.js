import { ADD_PRODUCT_TO_CART, REMOVE_ITEM_FROM_CART } from "./../cartConstants/cartConstants";

export var addProductToCart = (product) => async (dispatch) => {
  try {
    dispatch ({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        product,
      },
    })
  } catch (error) {
    console.log(error);
  }
};

export var removeItemFromCart = (productId) => async(dispatch) =>{
  try {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload :{
        productId
      }
    })
  } catch (error) {
    console.log(error)
  }
}