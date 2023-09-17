import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { getSingleBook } from "@/services/book.services";
import { useRouter } from "next/router";

const Detail = () => {
  const [bookDetails, setBookDetails] = useState({} as bookDetails);

  const router = useRouter();
  const id = router.query.id;

  const getData = async (param: number) => {
    const books = await getSingleBook(param);
    if (books.data) {
      setBookDetails(books.data);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      const param = parseInt(id as string);
      getData(param);
    }
  }, [id]);

  console.log(bookDetails);

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
              <span className=" text-xl mr-4 text-gray-500">Title</span>
              <span>{bookDetails.title}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Category Id</span>
              <span>{bookDetails.category_id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Author</span>
              <span>{bookDetails.author}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Image</span>
              <span>{bookDetails.image}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Description</span>
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
