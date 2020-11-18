export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setAvatar':
      console.log(state, '||||', action);
      return {...state, avatar: action.payload.avatar};
      break;
    default:
      return state;
  }
};
