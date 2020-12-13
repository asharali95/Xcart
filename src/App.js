import './App.css';
import { Route , Switch} from 'react-router-dom'
import home from './Pages/home/home';
import auth from './Pages/auth/auth';
import category from './Pages/category/category';
import productDetail from './Pages/productDetail/productDetail';
import checkout from './Pages/checkout/checkout';
function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={home} exact/>
          <Route path="/authentication" component={auth} />
          <Route path="/categories" component={category} />
          <Route path="/productDetail" component={productDetail} />
          <Route path="/checkout" component={checkout} />
      </Switch>
    </div>
  );
}
export default App;
