import React, {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
  Dispatch,
} from "react";

import { useAxios } from "../helpers/axios";
import { NextRouter } from "next/router";
import { Character } from "../types";

const CharContext = createContext(null);

const initialState: {
  currentChar: Character;
  charList: Character[];
} = {
  currentChar: null,
  charList: null,
};

enum ActionTypes {
  GET_CHAR_LIST = "GET_CHAR_LIST",
  CLEAR_CHAR_LIST = "CLEAR_CHAR_LIST",
  GET_CURR_CHAR = "GET_CURR_CHAR",
  CLEAR_CURR_CHAR = "CLEAR_CURR_CHAR",
}

interface Action {
  currentChar?: Character;
  charList?: Character[];
  type: ActionTypes;
}

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_CHAR_LIST:
      return { ...state, charList: action.charList };
    case ActionTypes.CLEAR_CHAR_LIST:
      return { ...state, charList: null };
    case ActionTypes.GET_CURR_CHAR:
      return { ...state, currentChar: action.currentChar };
    case ActionTypes.CLEAR_CURR_CHAR:
      return { ...state, currentChar: null };
    default:
      return state;
  }
}

export function useChar(router: NextRouter) {
  const { apiClient, errorHandler } = useAxios(router);
  const [{ charList, currentChar }, dispatch] = useContext<
    [typeof initialState, Dispatch<Action>]
  >(CharContext);

  const getCharList = async (force = false) => {
    if (!charList || force) {
      try {
        const { data } = await apiClient.get<Character[]>("/charsByUser");
        dispatch({
          type: ActionTypes.GET_CHAR_LIST,
          charList: data,
        });
      } catch (err) {
        errorHandler(err);
      }
    }
  };

  const getCurrentChar = async (charId: string) => {
    try {
      const { data } = await apiClient.get<Character>("/char", {
        params: { charId },
      });
      dispatch({
        type: ActionTypes.GET_CURR_CHAR,
        currentChar: data,
      });
    } catch (err) {
      errorHandler(err);
    }
  };

  const clearCurrentChar = () => {
    dispatch({
      type: ActionTypes.CLEAR_CURR_CHAR,
    });
  };

  const validateCharFormData = (formData: Partial<Character>) => {
    return (
      formData &&
      formData.endurance &&
      formData.accuracy &&
      formData.mobility &&
      formData.strength &&
      formData.name
    );
  };

  const createChar = async (formData: Partial<Character>) => {
    if (validateCharFormData(formData)) {
      try {
        const { data } = await apiClient.post<Character>(
          "/createChar",
          formData
        );
        if (data) router.push("/char/[_id]", `/char/${data._id}`);
      } catch (err) {
        errorHandler(err);
      }
    }
  };

  const updateChar = async (formData: Partial<Character>) => {
    if (validateCharFormData(formData)) {
      try {
        const { data } = await apiClient.put<{ isSuccess: boolean }>(
          "/updateChar",
          formData
        );
        if (data.isSuccess) router.back();
      } catch (err) {
        errorHandler(err);
      }
    }
  };

  const deleteChar = async (charId: string) => {
    try {
      const { data } = await apiClient.delete<{ isSuccess: boolean }>(
        "/deleteChar",
        {
          params: { charId },
        }
      );
      if (data.isSuccess) router.push("/char");
    } catch (err) {
      errorHandler(err);
    }
  };

  return {
    charList,
    getCharList,
    currentChar,
    getCurrentChar,
    clearCurrentChar,
    createChar,
    updateChar,
    deleteChar,
  };
}

const Provider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CharContext.Provider value={[state, dispatch]}>
      {children}
    </CharContext.Provider>
  );
};

export default Provider;
