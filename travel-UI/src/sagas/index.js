import { all } from 'redux-saga/effects';

function* set() {}

export default function* rootSaga() {
  yield all([set()]);
}
