import { productionAdditionInCart, productRemovalFromCart, AllProductsDeletionFromCart } from "../../../Utility/Utility-Products/Utility-Products";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,DELETE_ALL_PRODUCTS_FROM_CART } from "./../cartConstants/cartConstants";
var initialState = [];
const cartReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return productionAdditionInCart(state, payload.product)
    case REMOVE_PRODUCT_FROM_CART:
      return productRemovalFromCart(state, payload.productId)
    case DELETE_ALL_PRODUCTS_FROM_CART:
      return AllProductsDeletionFromCart(state, payload.productId)
    default:
      return state;
  }
};

export default cartReducer;
