import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Spinner from "@/components/Spinner";
import React, { useEffect, useRef, useState, CSSProperties } from "react";
import Link from "next/link";
import { searchBook } from "@/services/book.services";
import { ClipLoader } from "react-spinners";

const search = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [inputSearch, setInputSearch] = useState<string>();
  let [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSearch(inputRef.current?.value);
  };

  const getData = async (param: string) => {
    setLoading(true);
    const books = await searchBook(param);
    if (books.data) {
      setDataList(books.data);
    }
    setLoading(false);
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
        <form onSubmit={handleOnSubmit} className="flex items-center gap-2">
          <input
            type="text"
            ref={inputRef}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Cari bukumu disini..."
          />
          <button type="submit" className="btn-solid-sec">
            Cari
          </button>
        </form>
      </div>
      {inputSearch === undefined ? (
        <h1 className=" text-center mt-8 ">Cari buku yang anda minati</h1>
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <div className="container px-4 sm:px-8">
              {dataList.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                          <img
                            className="rating"
                            src="/svg/star5.svg"
                            alt="Rating"
                          />
                          <Link className="more" href={`/book/${item.id}`}>
                            Selengkapnya
                          </Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h1 className=" text-center mt-8 ">Buku tidak ditemukan</h1>
              )}
            </div>
          )}
        </>
      )}

      <Footer />
    </>
  );
};

export default search;
