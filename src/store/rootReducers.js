import { combineReducers } from 'redux-immutable';
import userReducer from '../users-list/store/reducers';

export default combineReducers({
  userReducer,
});
