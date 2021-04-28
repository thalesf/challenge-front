export const Types = {
  LOAD_USERS_REQUEST: 'users/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS: 'users/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE: 'users/LOAD_USERS_FAILURE',
};

interface Users {
  loading: boolean,
  users: []
}

const initialState: Users = {
  loading: false,
  users: []
}

const usersReducer = (state: Users = initialState, action: any): Users => {
  switch (action.type) {
    case Types.LOAD_USERS_REQUEST:
      return {
        ...state,
        users: []
      }
    case Types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: []
      }
    default:
      return state;
  }
}

export const getUsers = () => {
  return {
    type: Types.LOAD_USERS_REQUEST,
  }
}

export default usersReducer;