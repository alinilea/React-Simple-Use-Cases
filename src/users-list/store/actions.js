import * as actionTypes from './actionTypes';
import { users } from '../../data/data';

export function setUsersList() {
  return {
    type: actionTypes.SET_USERS_LIST,
    payload: users,
  };
}