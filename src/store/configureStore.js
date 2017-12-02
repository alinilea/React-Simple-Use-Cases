import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from './devtools';
import Immutable from 'immutable';

import rootReducers from './rootReducers';

export default function configureStore(initialState = {}) {
  const middlewares = [thunkMiddleware];
  let middleware = applyMiddleware(...middlewares); 
  
  const devTools = window.devToolsExtension ?
    window.devToolsExtension() :
    DevTools.instrument();
  
  middleware = compose(middleware, devTools);
  
  const store = middleware(createStore)(rootReducers, Immutable.fromJS(initialState));
  
  return store;
}
