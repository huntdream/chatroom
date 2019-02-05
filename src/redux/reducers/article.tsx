import { ALL_ARTICLE, ARTICLE } from '../actions';

interface State {
  list: Array<any>;
  piece: any;
}

const initialState: State = {
  list: [],
  piece: ''
};

const articles = (state: State = initialState, action: any) => {
  switch (action.type) {
    case ALL_ARTICLE.SUCCESS:
      return {
        ...state,
        list: action.list
      };
    case ALL_ARTICLE.FAILURE:
      return {
        ...state,
        error: action.error
      };
    case ARTICLE.SUCCESS:
      return {
        ...state,
        piece: action.piece
      };
    default:
      return state;
  }
};

export default articles;
