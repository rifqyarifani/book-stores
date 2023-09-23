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

export const getSinglePricing = async (id: number) => {
  try {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/pricing/id/${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

type RegisterData = {
  title: string;
  price: string;
  duration: string;
  details: string;
  description: string
};


export const updatePricing = async(id: number, data:RegisterData, token:string)=>{
  try{
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    const result = await axios.put(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/pricing/update/id/${id}`, data, config
    )
    return result.data
  }
  catch(error){
    return error
  }
}