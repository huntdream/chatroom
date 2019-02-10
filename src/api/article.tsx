import request from '../utils/request';

// GET Article List
export const getArticleList = (params: any): any => {
  return request('/article/all', {
    data: params
  });
};

// GET an Article
export const getArticle = (params: any): any => {
  return request(`/article/query?${params.key}=${params.value}`);
};

// ADD an Article
export const addArticle = (params: any): any => {
  return request('/article/add', {
    method: 'POST',
    data: params
  });
};
