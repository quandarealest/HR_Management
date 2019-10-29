import { combineReducers } from 'redux';
import users from './userReducers';
import accounts from './accountReducers';
const rootReducer = combineReducers({
  users,
  accounts
})

export default rootReducer;