const initialState = {};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case 'Login':
      return { ...state };
    default:
      return state;
  }
};

export default user;
