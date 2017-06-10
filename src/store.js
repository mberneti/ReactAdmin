import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { browserHistory } from 'react-router';
import {  routerMiddleware } from 'react-router-redux';

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory);
const store = createStore(reducers,
  applyMiddleware(middleware));

//log route change
// const history = syncHistoryWithStore(browserHistory, store);
// history.listen(location => console.log(location.pathname));

export default store;
