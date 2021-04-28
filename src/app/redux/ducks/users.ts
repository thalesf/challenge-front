import { Dispatch } from "redux";
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

export const loadUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: Types.LOAD_USERS_REQUEST,
      loading: true
    })

    const axios = new AxiosHttpClient();
    const requestOne = axios.request({
      url: 'https://swapi.dev/api/people/1',
      method: "get",
    })

    const requestTwo = axios.request({
      url: 'https://swapi.dev/api/people/4',
      method: "get",
    })


    Promise.race([requestOne, requestTwo]).then((user: any) => {
      dispatch({
        type: Types.LOAD_USERS_SUCCESS,
        loading: false,
        users: user.data
      })
    })

  } catch (error) {
    dispatch({
      type: Types.LOAD_USERS_FAILURE,
      loading: false
    })
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


export default usersReducer;