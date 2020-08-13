import Axios from "axios";
import { NextRouter } from "next/router";

export function useAxios(router: NextRouter) {
  const apiClient = Axios.create({ baseURL: "/api" });

  function errorHandler(err) {
    // TODO > real error handling
    // Axios errors
    switch (err.response?.status) {
      case 401:
      case 403:
      case 404:
        console.log(err.response.data);
        return;
      default:
        throw new Error(JSON.stringify(err.response));
    }
  }

  return { apiClient, errorHandler };
}
