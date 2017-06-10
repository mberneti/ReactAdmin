import { combineReducers } from 'redux';

// Reducers
import loginReducer from './login-reducer';
import dashboardReducer from './dashboard-layout-reducer';
import articleReducer from './article-reducer';
import jobownerReducer from './jobowner-reducer';
import serviceReducer from './service-reducer';

// react-router-redux
import { routerReducer } from 'react-router-redux';

// Combine Reducers
var reducers = combineReducers({
    articleState: articleReducer,
    jobownerState: jobownerReducer,
    loginState: loginReducer,
    dashboardLayoutState: dashboardReducer,
    serviceState:serviceReducer,
    routing: routerReducer
});

export default reducers;
