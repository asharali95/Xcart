import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Pages/home/home";
import authentication from "./Pages/authentication/authentication";
import category from "./Pages/category/category";
import productDetail from "./Pages/productDetail/productDetail";
import checkout from "./Pages/checkout/checkout";
import { connect } from "react-redux";
import { firebaseAuthListener } from './Redux/auth/authAction/authAction';

function App({firebaseAuthListener}) {
  useEffect(() => {
    firebaseAuthListener()
  },[firebaseAuthListener]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/authentication" component={authentication} />
        <Route path="/categories" component={category} />
        <Route path="/productDetail" component={productDetail} />
        <Route path="/checkout" component={checkout} />
      </Switch>
    </div>
  );
}
var actions = {
  firebaseAuthListener,
};
export default connect(null, actions)(App);
