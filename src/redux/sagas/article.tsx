import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import api from '../../api';

export function* getArticleList(action: any): SagaIterator {
  try {
    const payload = yield call(api.article.getArticleList, action.params);
    yield put({ type: 'SAVE_ARTICLE_LIST', list: payload.list });
  } catch (e) {
    yield put({ type: 'SAVE_ARTICLE_LIST', list: [] });
  }
}
