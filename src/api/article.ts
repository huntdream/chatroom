import request from '../utils/request';

// GET Article List
export const getArticleList = (params: any): any => {
  return request('/article/all', {
    data: params
  });
};
