import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Pages/Home/Home";
import authentication from "./Pages/Authentication/Authentication";
import category from "./Pages/Category/Category";
import productDetail from "./Pages/ProductDetail/ProductDetail";
import checkout from "./Pages/Checkout/Checkout";
import { connect } from "react-redux";
import { firebaseAuthListener } from './Redux/auth/authAction/authAction';
import Test from './Pages/Test/Test';
import Navbar from './Components/Navbar/Navbar';

function App({firebaseAuthListener}) {
  useEffect(() => {
    firebaseAuthListener()
  },[firebaseAuthListener]);
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/authentication" component={authentication} />
        <Route path="/categories" component={category} />
        <Route path="/productDetail" component={productDetail} />
        <Route path="/checkout" component={checkout} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}
var actions = {
  firebaseAuthListener,
};
export default connect(null, actions)(App);
