import * as Actions from '../Actions/Types';

const initialState = {
  firstName: '',
  lastName: ''
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_FIRSTNAME: {
      return {
        ...state,
        firstName: action.payload.firstName
      };
    }

    case Actions.CHANGE_LASTNAME:
      return {
        ...state,
        lastName: action.payload.lastName
      };

    default:
      return state;
  }
};
