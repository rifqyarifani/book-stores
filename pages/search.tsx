import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React, { useEffect, useRef, useState } from "react";
import { fetchApi } from "@/components/services";
import Link from "next/link";

const search = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [searchBooksList, setSearchBooksList] = useState([] as bookDetails[]);
  const [inputSearch, setInputSearch] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    setInputSearch(inputRef.current?.value);
  };

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const result = dataList.filter((book) =>
      book.title.toLowerCase().includes(inputSearch?.toLowerCase() as string)
    );
    setSearchBooksList(result);
  }, [inputSearch]);


  return (
    <>
      <Navbar />
      <Breadcrumbs>Search</Breadcrumbs>
      <div className="container px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <input
            type="text"
            ref={inputRef}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Cari bukumu disini..."
          />
          <button
            type="button"
            className="btn-solid-sec"
            onClick={handleOnClick}
          >
            Cari
          </button>
        </div>
      </div>
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {inputSearch === undefined &&
            dataList.map((item) => (
              <div
                className="relative overflow-hidden bg-white shadow-md rounded-xl"
                key={item.id}
              >
                <Link href={`/book/${item.id}`}>
                  <img
                    className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
                    src={".././images" + "/" + item.images}
                    alt="picturebook"
                  />
                </Link>
                <div className="px-4 text-left">
                  <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {item.title}
                  </h5>
                  <p className="">{item.penulis}</p>
                  <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                    {item.deskripsi}
                  </p>
                  <span className="rating-more">
                    <img className="rating" src="/svg/star5.svg" alt="Rating" />
                    <Link className="more" href={`/book/${item.id}`}>
                      Selengkapnya
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          {searchBooksList.map((item) => (
            <div
              className="relative overflow-hidden bg-white shadow-md rounded-xl"
              key={item.id}
            >
              <Link href={`/book/${item.id}`}>
                <img
                  className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
                  src={".././images" + "/" + item.images}
                  alt="picturebook"
                />
              </Link>
              <div className="px-4 text-left">
                <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {item.title}
                </h5>
                <p className="">{item.penulis}</p>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                  {item.deskripsi}
                </p>
                <span className="rating-more">
                  <img className="rating" src="/svg/star5.svg" alt="Rating" />
                  <Link className="more" href={`/book/${item.id}`}>
                    Selengkapnya
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default search;
