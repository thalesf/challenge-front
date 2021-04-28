import { loadUser } from "@/core/usecases/load-user";
import AxiosHttpClient from '../../../core/infra/http/axios/http-get';

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

export const loadUsers = async() => {
  try {
    const axios = new AxiosHttpClient();
    const data = await axios.request({
      url: 'https://swapi.dev/api/people/1',
      method: "get",
    })
    console.log("DATA", data);

  } catch (error) {
    
  }
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

export const getUsers = async () => {
  return {
    type: Types.LOAD_USERS_REQUEST,
  }
}

export default usersReducer;