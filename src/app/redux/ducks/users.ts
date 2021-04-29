import { User } from "@/core/entities/user";
import { Dispatch } from "redux";
import AxiosHttpClient from '@/core/infra/http/axios/http-get';
import { LoadUser } from '@/core/data/load-user';

export const Types = {
  LOAD_USERS_REQUEST: 'users/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS: 'users/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE: 'users/LOAD_USERS_FAILURE',
};

export const requestOne = 'https://swapi.dev/api/people/1';
export const requestTwo = 'https://swapi.dev/api/people/4'
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
    const loadFirstUser = new LoadUser(requestOne, axios);
    const loadSecondUser = new LoadUser(requestTwo, axios);

    const user1 = loadFirstUser.getUser();
    const user2 = loadSecondUser.getUser();
    
    Promise.race([user1, user2]).then((user: any) => {
      dispatch({
        type: Types.LOAD_USERS_SUCCESS,
        payload: {
          user
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