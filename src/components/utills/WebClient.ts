import axios, { type AxiosRequestHeaders, type AxiosResponse } from "axios";
import config from "./Config";

const apiClient = axios.create({
  baseURL: config.BASE_URL,
  headers: config.HEADER,
  timeout: config.TIMEOUT
})


export const createPost = async <T> (endpoint: string, props: T, headers: Record<string, string>): Promise<AxiosResponse> => {
  /*
   * This method allows to post  API
   */
  try {
    const response = await apiClient.post(endpoint, props, { headers });
    return response
  } catch (error) {
    console.error("Error Create Post:: ", error);
    throw error
  }
}

export const createGetParams = async (endpoint: string, params: Record<string, unknown>, headers: Record<string, string> | AxiosRequestHeaders): Promise<AxiosResponse> => {
  /*
   * This method allows to get API with params
   */
  try {
    const response = await apiClient.get(endpoint, { params, headers });
    return response
  } catch (error) {
    console.error("Error GetParams:: ", error);
    throw error
  }
}
export const createGetHeaders = async (endpoint: string, headers: AxiosRequestHeaders): Promise<AxiosResponse> => {
  /*
   * This method allows to Get  API
   */
  try {
    const response = await apiClient.get(endpoint, { headers: headers });
    return response
  } catch (error) {
    console.error("Error GetHeaders :: ", error);
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
    console.error("Error Get:: ", error);
    throw error
  }
}