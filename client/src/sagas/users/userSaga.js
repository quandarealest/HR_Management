import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';

import * as usersAPI from '../../api/userAPI';
import { actions as userActions } from '../../reducers/userReducers';
import { ACTION_TYPES } from '../../reducers/userReducers'; 

function* getUserList(){
  try{
    const res = yield call(usersAPI.getUserList);
    const { data } = res;
    yield put(userActions.getUsersSuccess(data));
  }catch(error){
    yield put(userActions.getUsersFailure(error));
  }
}

function* addUser(data){
  try{
    const { payload } = data;
    const { data: newUser } = yield call(usersAPI.addUser, payload);
    yield put(userActions.addUserSuccess(newUser));
  }catch(error){
    console.log(error);
    yield put(userActions.addUserFailure(error));
  }
}

function* deleteUser(data) {
  try{
    const { payload } = data;
    yield call(usersAPI.deleteUser, payload);
  }catch(error){
    console.log(error);
  }
}

function* updateUser(data) {
  try{
    const { payload } = data;
    const { _id, ...rest } = payload;
    const userInfo = {...rest};
    yield call(usersAPI.updateUser, _id, userInfo);
  }catch(error){
    console.log(error);
  }
}

export default function* userFlow(){
  yield takeLatest(ACTION_TYPES.GET_USERS, getUserList);
  yield takeEvery(ACTION_TYPES.ADD_USER, addUser);
  yield takeLatest(ACTION_TYPES.DELETE_USER, deleteUser);
  yield takeLatest(ACTION_TYPES.UPDATE_USER, updateUser);
}