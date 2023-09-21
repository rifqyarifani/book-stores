import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { deleteBook } from "@/services/book.services";
import { useRouter } from "next/router";

const Delete = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className=" p-4">
      <BackButton id="books" />
      <h1 className=" text-3xl my-4">Delete Book</h1>
      <div className=" flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className=" text-2xl">
          Are you sure you want to delete this book?
        </h3>
        <button className=" p-4 bg-red-600 text-white m-8 w-full">
          {""}
          Yes, Delete it!
        </button>
      </div>
    </div>
  );
};

export default Delete;
