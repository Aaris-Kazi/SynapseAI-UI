import axios, { type AxiosRequestHeaders, type AxiosResponse } from "axios";
import config from "./Config";

const apiClient = axios.create({
  baseURL: config.BASE_URL,
  headers: config.HEADER,
  timeout: config.TIMEOUT
})


export const createPost = async (endpoint: string, props: Request, headers: AxiosRequestHeaders): Promise<AxiosResponse> => {
  /*
   * This method allows to post  API
   */
  try {
    const response = await apiClient.post(endpoint, props, { headers });
    return response
  } catch (error) {
    console.error("Error Create webcleint:: ", error);
    throw error
  }
}

export const createGetParams = async (endpoint: string, params: AxiosRequestHeaders, headers: AxiosRequestHeaders): Promise<AxiosResponse> => {
  /*
   * This method allows to post  API
   */
  try {
    const response = await apiClient.get(endpoint, { params: params, headers: headers });
    return response
  } catch (error) {
    console.error("Error Create webcleint:: ", error);
    throw error
  }
}

export const createGet = async (endpoint: string): Promise<AxiosResponse> =>  {
  /*
   * This method allows to post  API
   */
  try {
    const response = await apiClient.get(endpoint);
    return response
  } catch (error) {
    console.error("Error Create webcleint:: ", error);
    throw error
  }
}