import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/organisms/Admin/navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { getAllBooks, getAllCategories } from "@/services/book.services";

const Books = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const getData = async () => {
    const books = await getAllBooks();
    if (books.data) {
      setDataList(books.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" mt-20">
        <div className=" flex items-center justify-center relative">
          <h1 className=" text-center text-regular">Books</h1>
          <Link
            className=" nav-link page-scroll absolute right-32"
            href="/admin/books/create"
          >
            <MdOutlineAddBox className=" text-regular text-4xl right-0" />
          </Link>
        </div>
        <table className=" w-5/6 border-separate border-spacing-2 mx-auto">
          <thead>
            <tr>
              <th className=" border border-slate-600 rounded-md">No</th>
              <th className=" border border-slate-600 rounded-md">Title</th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">
                Category
              </th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className=" border border-slate-600 rounded-md">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(dataList).length > 0 &&
              dataList.map((book, index) => (
                <tr key={book.id} className=" h-8">
                  <td className=" border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.category_id}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center">
                    <div className=" flex justify-center gap-x-4">
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/books/${book.id}/detail`}
                      >
                        <BsInfoCircle className=" text-2xl text-green-800" />
                      </Link>
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/books/${book.id}/edit`}
                      >
                        <AiOutlineEdit className=" text-2xl text-yellow-600" />
                      </Link>
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/books/${book.id}/delete`}
                      >
                        <MdOutlineDelete className=" text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Books;
