import axios from "axios";

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
