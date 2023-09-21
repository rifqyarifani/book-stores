import axios from "axios";

export const getAllTransactions = async (token: string, callback: Function) => {
    try {
      const config = {
        headers: {Authorization: `Bearer ${token}`},
      }
      const result = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/transaction/all", config
      );
      callback(true, result.data)
    } catch (error) {
      callback(false, error)
    }
  };