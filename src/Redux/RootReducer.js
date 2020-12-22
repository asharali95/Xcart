import { combineReducers } from "redux";
import authReducer from "./auth/authReducer/authReducer";
import productReducer from "./product/productReducers";

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;
