import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';

import * as accountAPI from '../../api/accountAPI';
import { actions as accountActions } from '../../reducers/accountReducers';
import { ACTION_TYPES } from '../../reducers/accountReducers';

function* getAccount(data){
  try{
    const { payload } = data;
    const res = yield call(accountAPI.getAccount, payload);
    const { data: accountInfo } = res;
    yield put(accountActions.getAccountSuccess(accountInfo));
  }catch(error) {
    console.log(error);
    yield put(accountActions.getAccountFailure(error));
  }
}

function* addAccount(data) {
  try{
    const { payload } = data;
    yield call(accountAPI.addAccount, payload);
  }catch(error) {
    console.log(error);
  }
}

export default function* accountFlow(){
  yield takeLatest(ACTION_TYPES.GET_ACCOUNT, getAccount);
  yield takeLatest(ACTION_TYPES.ADD_ACCOUNT, addAccount);
}
