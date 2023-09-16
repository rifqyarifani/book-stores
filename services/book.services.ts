import axios from "axios";

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
  } catch (error) {}
};
