import axios from "axios";

export const getAllPricing = async () => {
  try {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/pricing"
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
