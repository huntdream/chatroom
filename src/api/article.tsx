import request from '../utils/request';

// GET Article List
export const getArticleList = (params: any): any => {
  return request('/article/all', {
    data: params
  });
};

// GET an Article by id
export const getArticle = (params: any): any => {
  return request(`/article/query?id=${params}`);
};
