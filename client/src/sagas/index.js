import { all } from 'redux-saga/effects';
import userFlow from './users/userSaga';
import accountFlow from './accounts/accountSaga';

export default function* rootSaga() {
  yield all([
    userFlow(),
    accountFlow()
  ])
}