import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { deleteBook } from "@/services/book.services";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Delete = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cookie] = useCookies(["token"]);

  const handleClick = () => {
    const param = parseInt(id as string);
    deleteBook(param, cookie.token as string);
    alert("hapus berhasil");
    router.push("/admin/books");
  };

  return (
    <div className=" p-4 container">
      <BackButton id="books" />
      <h1 className=" text-3xl my-4 text-center py-8">Delete Book</h1>
      <div className=" flex flex-col items-center border-2 border-regular rounded-xl w-[600px] p-8 mx-auto">
        <h3 className=" text-2xl">
          Are you sure you want to delete this book?
        </h3>
        <button
          className=" p-4 btn-solid-sec text-white m-8 w-full"
          onClick={handleClick}
        >
          {""}
          Yes, Delete it!
        </button>
      </div>
    </div>
  );
};

export default Delete;
