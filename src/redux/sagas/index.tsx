import api from '../../api';
import * as actions from '../actions';
import {
  call,
  put,
  take,
  fork,
  all,
  takeEvery
} from '@redux-saga/core/effects';

function* fetchEntity(type: any, apiFn: any, payload: any) {
  const response = yield call(apiFn, payload);
  if (response) {
    yield put(type.success(response));
  } else {
    put(type.failure('error'));
  }
}

function* getAllArticle(action: any) {
  yield fetchEntity(
    actions.allArticle,
    api.article.getArticleList,
    action.payload
  );
}

function* getArticle(action: any) {
  yield fetchEntity(actions.article, api.article.getArticle, action.payload);
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.ALL_ARTICLE.REQUEST, getAllArticle),
    takeEvery(actions.ARTICLE.REQUEST, getArticle)
  ]);
}
