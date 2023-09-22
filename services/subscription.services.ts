import axios from "axios";

export const getSubscriptionByUserId = async (
  token: string,
  id: number,
  callback: Function
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/subscription/${id}`,
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};
