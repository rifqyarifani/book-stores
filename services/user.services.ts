import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export const register = async (data: User, callback: Function) => {
  try {
    const result = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/user/register",
      data
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

type LoginData = {
  email: string;
  password: string;
};

export const login = async (data: LoginData, callback: Function) => {
  try {
    const result = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/user/login",
      data
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

export const getUserDetails = async (token: string, callback: Function) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/user/detail",
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};
