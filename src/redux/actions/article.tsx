import { GET_ARTICLE_LIST, SAVE_ARTICLE_LIST } from '../constants';

export const getArticleList = (params: any) => ({
  type: GET_ARTICLE_LIST,
  params
});

export const saveArticleList = (list: any) => ({
  type: SAVE_ARTICLE_LIST,
  list
});
