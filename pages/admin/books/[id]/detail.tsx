import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { getSingleBook, getAllCategories } from "@/services/book.services";
import { useRouter } from "next/router";

const Detail = () => {
  const [bookDetails, setBookDetails] = useState({} as bookDetails);
  const [categoryList, setCategoryList] = useState([] as CategoryList[]);

  const router = useRouter();
  const id = router.query.id;

  const getData = async (param: number) => {
    const books = await getSingleBook(param);
    const category = await getAllCategories();
    if (books.data) {
      setBookDetails(books.data);
      setCategoryList(category.data);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      const param = parseInt(id as string);
      getData(param);
    }
  }, [id]);

  return (
    <div className=" p-4">
      <BackButton id="books" />
      <h1 className=" text-3xl my-4">Show Book</h1>
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        {Object.keys(bookDetails).length > 0 ? (
          <div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Id</span>
              <span>{bookDetails.id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Judul</span>
              <span>{bookDetails.title}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Kategori</span>
              <span>
                {" "}
                {categoryList.map((category) => {
                  if (category.id === bookDetails.category_id) {
                    return category.name;
                  }
                })}
              </span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Penulis</span>
              <span>{bookDetails.author}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Gambar</span>
              <span>{bookDetails.image}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Deskripsi</span>
              <span>{bookDetails.description}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Detail;
