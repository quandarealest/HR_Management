import { all } from 'redux-saga/effects';
import userFlow from './users/userSaga';

export default function* rootSaga() {
  yield all([
    userFlow(),
  ])
}