import { combineReducers } from "redux";
import authReducer from "./auth/authReducer/authReducer";
import productReducer from "./product/productReducers";
import cartReducer from "./cart/cartReducer/cartReducer";
import modalReducer from "./modal/modalReducer";

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducer;
