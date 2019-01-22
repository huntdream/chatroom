import { GET_ARTICLE_LIST, SAVE_ARTICLE_LIST } from '../constants';

interface State {
  list: Array<any>;
}

type Action = {
  type: string;
  list: Array<any>;
};

const initialState: State = {
  list: []
};

const article = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_ARTICLE_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default article;
