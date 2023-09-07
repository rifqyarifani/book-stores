import { API_URL } from "@/pages/api/ApiBook";
import axios from "axios";

export const fetchApi = async () => {
    const { data } = await axios.get(API_URL + "/Novel");
    if (data) {
        return data;
    }

}