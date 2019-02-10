import {
  GET_ARTICLE_LIST,
  SAVE_ARTICLE_LIST,
  GET_ARTICLE,
  SAVE_ARTICLE
} from '../constants';

export interface Action {
  (type: string, payload?: any): any;
}

// Generate request types
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FALIURE = 'FAILURE';

const createRequestTypes = (base: string): any =>
  [REQUEST, SUCCESS, FALIURE].reduce((prev: any, type: string) => {
    prev[type] = `${base}_${type}`;
    return prev;
  }, {});

// Make action
const action: Action = (type, payload = {}) => ({
  type,
  ...payload
});

export const ALL_ARTICLE = createRequestTypes('ALL_ARTICLE');
export const ARTICLE = createRequestTypes('ARTICLE');
export const ADD_ARTICLE = createRequestTypes('ADD_ARTICLE');

export const allArticle = {
  request: (payload: any) => action(ALL_ARTICLE[REQUEST], { payload }),
  success: (list: any) => action(ALL_ARTICLE[SUCCESS], { list }),
  failure: (error: any) => action(ALL_ARTICLE[FALIURE], { error })
};

export const article = {
  request: (payload: any) => action(ARTICLE[REQUEST], { payload }),
  success: (piece: any) => action(ARTICLE[SUCCESS], { piece }),
  failure: (error: any) => action(ARTICLE[FALIURE], { error })
};

export const addArticle = {
  request: (payload: any) => action(ADD_ARTICLE[REQUEST], { payload }),
  success: () => action(ADD_ARTICLE[SUCCESS]),
  failure: (error: any) => action(ADD_ARTICLE[FALIURE], { error })
};
