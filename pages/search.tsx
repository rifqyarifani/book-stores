import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { searchBook } from "@/services/book.services";

const search = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [inputSearch, setInputSearch] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    setInputSearch(inputRef.current?.value);
  };

  const getData = async (param: string) => {
    const data = await searchBook(param);
    if (data.data) {
      setDataList(data.data);
    }
  };
  useEffect(() => {
    if (inputSearch !== undefined) {
      const param = inputSearch;
      getData(param);
    }
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
                    src={"../" + item.image}
                    alt="picturebook"
                  />
                </Link>
                <div className="px-4 text-left">
                  <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {item.title}
                  </h5>
                  <p className="">{item.author}</p>
                  <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                    {item.description}
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
          {dataList.map((item) => (
            <div
              className="relative overflow-hidden bg-white shadow-md rounded-xl"
              key={item.id}
            >
              <Link href={`/book/${item.id}`}>
                <img
                  className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
                  src={"../" + item.image}
                  alt="picturebook"
                />
              </Link>
              <div className="px-4 text-left">
                <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {item.title}
                </h5>
                <p className="">{item.author}</p>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                  {item.description}
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
