import axios from "axios";

type RegisterData = {
  title: string;
  author: string;
  description: string;
  content: string;
  categoryId: number;
};

export const getAllBooks = async () => {
  try {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/book/"
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getSingleBook = async (id: number) => {
  try {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/book/id/${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const searchBook = async (title: string) => {
  try {
    const encodedTitle = encodeURIComponent(title);
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/api/book/search?title=${encodedTitle}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getAllCategories = async () => {
  try {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/book/categories`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getBooksByCategory = async (name: string) => {
  try {
    const encodedName = encodeURIComponent(name);
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/book/categories/${encodedName}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const deleteBook = async (id: number, token:string) =>{
  try{

    const config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    const result = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/book/id/${id}`, config
    )
    return result.data
  }
  catch(error){
    return error
  }
}

export const addBook = async (data: RegisterData, image:File, token:string)=>{
  try{

    const form = new FormData();
    form.append("image", image);


    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/book/add`, data, config
    )

    const uploadBookImage = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/book/add",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  catch(error){
    return error
  }
}
