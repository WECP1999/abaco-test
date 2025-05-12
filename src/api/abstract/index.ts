import defaultAxiosConfig from '@/app/utils/configs/axios';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const get = async <T>(
  uri: string,
  requestConfig?: AxiosRequestConfig<any>
) => {
  try {
    const response = await defaultAxiosConfig.get(uri, requestConfig);

    return response as AxiosResponse<T>;
  } catch (error) {
    const err = error as AxiosError<any>;

    throw err;
  }
};

export const post = async <T, R = {}>(
  uri: string,
  data?: R,
  requestConfig?: AxiosRequestConfig<any>
) => {
  try {
    const response = await defaultAxiosConfig.post(uri, data, requestConfig);

    return response as AxiosResponse<T>;
  } catch (error) {
    const err = error as AxiosError<any>;

    throw err;
  }
};

export const put = async <T, R = {}>(
  uri: string,
  data?: R,
  requestConfig?: AxiosRequestConfig<any>
) => {
  try {
    const response = await defaultAxiosConfig.put(uri, data, requestConfig);

    return response as AxiosResponse<T>;
  } catch (error) {
    const err = error as AxiosError<any>;

    throw err;
  }
};

export const remove = async <T>(
  uri: string,
  requestConfig?: AxiosRequestConfig<any>
) => {
  try {
    const response = await defaultAxiosConfig.delete(uri, requestConfig);

    return response as AxiosResponse<T>;
  } catch (error) {
    const err = error as AxiosError<any>;

    throw err;
  }
};
