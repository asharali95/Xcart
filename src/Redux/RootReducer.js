import { combineReducers } from "redux";
import authReducer from "./auth/authReducer/authReducer";
import productReducer from "./product/productReducers";
import cartReducer from "./cart/cartReducer/cartReducer";
import modalReducer from "./modal/modalReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localstorage
// import storage from "redux-persist/lib/storage/session" //sessionstorage

const persistConfig = {
  key: "root", //root means root level config horhi
  storage,
  whitelist: ["auth", "cart"],
};

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig, rootReducer);
