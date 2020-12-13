import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

var middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(

  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store