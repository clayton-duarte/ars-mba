import Axios from "axios";
import { NextRouter } from "next/router";

export function useAxios(router: NextRouter) {
  const apiClient = Axios.create({ baseURL: "/api" });

  function errorHandler(err) {
    // TODO > real error notification

    // Axios errors
    if (err.response?.data) alert(err.response.data);
    if (err.response?.status === 401) return router.push("/login");
    if (err.response?.status === 403) return router.push("/login");
    if (err.response?.status === 404) return router.push("/404");
    if (err.response) throw new Error(JSON.stringify(err.response));

    // Unknown error
    alert("Unknown error!");
    throw new Error(JSON.stringify(err));
  }

  return { apiClient, errorHandler };
}
