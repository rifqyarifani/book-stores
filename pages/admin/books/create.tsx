import React, { useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { addBook } from "@/services/book.services";
import { useCookies } from "react-cookie";

type RegisterData = {
  title: string;
  author: string;
  description: string;
  content: string;
  category_id: number;
};

const Create = () => {
  const [cookie] = useCookies(["token"]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files as FileList;
    const test = file?.[0];

    setSelectedFile(test);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = {
      title: e.currentTarget.judul.value,
      author: e.currentTarget.author.value,
      description: e.currentTarget.description.value,
      content: e.currentTarget.content.value,
      category_id: e.currentTarget.categoryId.value,
    };

    if (selectedFile) {
      addBook(
        data,
        selectedFile,
        cookie.token as string,
        (status: boolean, res: any) => {
          if (status) {
            alert("tambah buku berhasil");
          } else {
            alert("tambah buku gagal");
          }
        }
      );
    }
  };

  return (
    <div className=" p-4">
      <BackButton id="books" />
      <h1 className=" text-3xl my-4">Create Book</h1>
      <form
        className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="judul" className=" text-xl mr-4 text-gray-500">
          Judul
        </label>
        <input
          type="text"
          id="judul"
          name="judul"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          required
        />
        <label htmlFor="author" className=" text-xl mr-4 text-gray-500">
          Penulis
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          required
        />
        <label htmlFor="categoryId" className=" text-xl mr-4 text-gray-500">
          ID Kategori
        </label>
        <input
          type="number"
          id="categoryId"
          name="categoryId"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          required
        />
        <label htmlFor="image" className=" text-xl mr-4 text-gray-500">
          Gambar
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          onChange={handleFileUpload}
          required
        />
        <label htmlFor="description" className=" text-xl mr-4 text-gray-500">
          Deskripsi
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          required
        />
        <label htmlFor="content" className=" text-xl mr-4 text-gray-500">
          Konten
        </label>
        <input
          type="text"
          id="content"
          name="content"
          className=" border-2 border-gray-500 px-4 py-2 w-full"
          required
        />
        <button className=" p-2 bg-sky-300 m-8 rounded-2xl" type="submit">
          Buat
        </button>
      </form>
    </div>
  );
};

export default Create;
