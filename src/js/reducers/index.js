import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    articleReducer,
  router: routerReducer
});
