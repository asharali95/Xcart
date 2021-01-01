import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  DELETE_ALL_PRODUCTS_FROM_CART,
} from "./../cartConstants/cartConstants";

export var addProductToCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        product,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export var removeItemFromCart = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: {
        productId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export var deleteAllProductsFromCart = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ALL_PRODUCTS_FROM_CART,
      payload: {
        productId
      },
    });
  } catch (error) {
    console.log(error);
  }
};
