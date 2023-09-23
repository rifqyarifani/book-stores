import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/organisms/Admin/navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { getAllBooks, getAllCategories } from "@/services/book.services";
import Spinner from "@/components/Spinner";

const Books = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [categoryList, setCategoryList] = useState([] as CategoryList[]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const books = await getAllBooks();
    const category = await getAllCategories();
    if (books.data) {
      setDataList(books.data);
      setCategoryList(category.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" mt-20 container">
        <div className=" flex items-center justify-center relative">
          <h1 className=" text-center text-regular mb-8">Books</h1>
          <Link
            className=" nav-link page-scroll absolute right-32"
            href="/admin/books/create"
          >
            <MdOutlineAddBox className=" text-regular text-4xl right-0" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="border-separate border-spacing-2 mx-auto">
            <thead>
              <tr>
                <th className=" border border-slate-600 rounded-md">No</th>
                <th className=" border border-slate-600 rounded-md">Judul</th>
                <th className=" border border-slate-600 rounded-md max-md:hidden">
                  Kategori
                </th>
                <th className=" border border-slate-600 rounded-md max-md:hidden">
                  Penulis
                </th>
                <th className=" border border-slate-600 rounded-md">Operasi</th>
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
                      {categoryList.map((category) => {
                        if (category.id === book.category_id) {
                          return category.name;
                        }
                      })}
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
        )}
      </div>
    </>
  );
};

export default Books;
