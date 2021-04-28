import { User } from "@/core/entities/user";
import { Dispatch } from "redux";
import AxiosHttpClient from '@/core/infra/http/axios/http-get';

export const Types = {
  LOAD_USERS_REQUEST: 'users/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS: 'users/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE: 'users/LOAD_USERS_FAILURE',
};

interface Users {
  loading: boolean,
  user: User
}

const initialState: Users = {
  loading: false,
  user: {
    name: "",
    url: ""
  }
}

export const loadUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: Types.LOAD_USERS_REQUEST,
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
        payload: {
          user: user.data
        }
      })
    })

  } catch (error) {
    dispatch({
      type: Types.LOAD_USERS_FAILURE,
    })
  }
}

const usersReducer = (state: Users = initialState, action: any): Users => {
  switch (action.type) {
    case Types.LOAD_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        user: {
          name: "",
          url: ""
        }
      }
    case Types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user
      }
    case Types.LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        user: {
          name: "",
          url: ""
        }
      }
    default:
      return state;
  }
}


export default usersReducer;