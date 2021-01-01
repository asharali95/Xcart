import { combineReducers } from "redux";
import authReducer from "./auth/authReducer/authReducer";
import productReducer from "./product/productReducers";
import cartReducer from "./cart/cartReducer/cartReducer";

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
