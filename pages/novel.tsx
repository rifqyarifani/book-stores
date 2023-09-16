import {
  getAllBooks,
  getAllCategories,
  getBooksByCategory,
  searchBook,
} from "@/services/book.services";
import React, { useEffect, useState } from "react";

export default function novel() {
  const [bookList, setBookList] = useState([]);

  const allBooks = async () => {
    const result: any = await getBooksByCategory("fiksii");
    setBookList(result);
  };

  useEffect(() => {
    allBooks();
  }, []);

  console.log(bookList);
  return <div>novel</div>;
}
