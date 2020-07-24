import React, {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
} from "react";
import { useRouter } from "next/router";

import { useAxios } from "../helpers/axios";
import { NextRouter } from "next/router";
import { User } from "../types";

const UserContext = createContext(null);

const initialState: User = null;

enum ActionTypes {
  GET_USER = "GET_USER",
  CLEAR_USER = "CLEAR_USER",
}

interface Action {
  type: ActionTypes;
  payload?: User;
}

function reducer(state: User, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.payload;
    case ActionTypes.CLEAR_USER:
      return initialState;
    default:
      return state;
  }
}

export function useUser(router: NextRouter) {
  const [user, dispatch] = useContext<[User, Dispatch<Action>]>(UserContext);
  const { apiClient, errorHandler } = useAxios(router);

  async function getUser() {
    try {
      const { data } = await apiClient.get<User>("/user");
      dispatch({
        type: ActionTypes.GET_USER,
        payload: data,
      });
    } catch (err) {
      errorHandler(err);
    }
  }

  async function doLogin(formData: User) {
    try {
      const { data } = await apiClient.post("/login", formData);
      if (data.isSuccess) {
        router.push("/");
        dispatch({
          type: ActionTypes.GET_USER,
          payload: data.user,
        });
      }
    } catch (err) {
      errorHandler(err);
    }
  }

  async function doLogout() {
    try {
      const { data } = await apiClient.get("/logout");
      if (data.isSuccess) router.push("/login");
      dispatch({
        type: ActionTypes.CLEAR_USER,
      });
    } catch (err) {
      errorHandler(err);
    }
  }

  return { user, getUser, doLogin, doLogout };
}

const Provider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
