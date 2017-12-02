import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const INITIAL_STATE = Immutable.fromJS({
  usersList: [],
});

function setUsersList(state, payload) {
  return state.set('usersList', Immutable.fromJS(payload));
}

const handlers = {
  [actionTypes.SET_USERS_LIST]: setUsersList,
};

export default function userReducer(state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];
  
  if (!handler) return state;
  return handler(state, action.payload);
}
