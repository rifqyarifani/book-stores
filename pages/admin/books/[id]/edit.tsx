import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { useRouter } from "next/router";
import { getSingleBook, updateBook } from "@/services/book.services";
import { useCookies } from "react-cookie";

const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState({} as bookDetails);
  const [cookie] = useCookies(["token"]);

  const router = useRouter();

  const getDetailBooks = async () => {
    const id = parseInt(router.query.id as string);

    const result = await getSingleBook(id);

    if (!result.data) {
      alert("Terjadi kesalahan");
      window.location.href = "/admin/books";
    } else {
      setBookDetails(result.data);
    }
  };

  const handleEditBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = parseInt(router.query.id as string);
    const title = e.currentTarget.book_title.value;
    const author = e.currentTarget.author.value;
    const category_id = e.currentTarget.category_id.value;
    const content = e.currentTarget.content.value;
    const description = e.currentTarget.description.value;

    const data = {
      id,
      title,
      author,
      category_id,
      content,
      description,
    };

    updateBook(cookie.token, data, (status: boolean, res: any) => {
      if (status) {
        alert("ubah buku sukses");
        window.location.href = "/admin/books";
      } else {
        alert("ubah buku gagal");
      }
    });
  };

  useEffect(() => {
    getDetailBooks();
  }, []);

  return (
    <div className=" p-4 container">
      <BackButton id="books" />
      <h1 className=" text-3xl my-4 text-center py-8">Edit Book</h1>
      <form
        onSubmit={handleEditBook}
        className=" flex flex-col border-2 border-regular rounded-xl w-[600px] p-4 mx-auto"
      >
        <div className="my-4">
          <label htmlFor="book_title" className=" text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            name="book_title"
            id="book_title"
            type="text"
            defaultValue={bookDetails?.title}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className=" text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            defaultValue={bookDetails?.author}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label htmlFor="category_id" className=" text-xl mr-4 text-gray-500">
            Category
          </label>
          <select
            name="category_id"
            id="category_id"
            defaultValue={bookDetails?.category_id}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            required
          >
            <option value={1}>Fiksi</option>
            <option value={2}>Sejarah</option>
            <option value={1}>Gaya Hidup</option>
          </select>
        </div>
        <div className="my-4">
          <label htmlFor="description" className=" text-xl mr-4 text-gray-500">
            Description
          </label>
          <input
            name="description"
            id="description"
            type="text"
            defaultValue={bookDetails?.description}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label htmlFor="content" className=" text-xl mr-4 text-gray-500">
            Content
          </label>
          <input
            type="text"
            name="content"
            id="content"
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <button className=" p-2 btn-solid-reg m-8 rounded-2xl" type="submit">
          Ubah
        </button>
      </form>
    </div>
  );
};

export default Edit;
