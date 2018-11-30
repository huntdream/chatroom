const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state };
    default:
      return state;
  }
};

export default user;
