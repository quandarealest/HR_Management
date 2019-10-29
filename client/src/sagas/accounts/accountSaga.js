import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';

import * as accountAPI from '../../api/accountAPI';
import { actions as accountActions } from '../../reducers/accountReducers';
import { ACTION_TYPES } from '../../reducers/accountReducers';

function* getAccountList(){
  try{
    const res = yield call(accountAPI.getAccountList);
    const { data } = res;
    yield put(accountActions.getAccountsSuccess(data));
  }catch(error) {
    yield put(accountActions.getAccountsFailure(error));
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
  yield takeLatest(ACTION_TYPES.GET_ACCOUNTS, getAccountList);
  yield takeLatest(ACTION_TYPES.ADD_ACCOUNT, addAccount);
}
