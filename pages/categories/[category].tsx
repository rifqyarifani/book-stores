import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApi } from "@/components/services";
import Link from "next/link";

const categoryBooks = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [categoryBooksList, setCategoryBooksList] = useState(
    [] as bookDetails[]
  );

  const router = useRouter();
  const category = router.query.category;

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const details = dataList.filter((book) => book.kategori === category);
    setCategoryBooksList(details);
  }, [dataList]);

  return (
    <>
      <Navbar />
      <Breadcrumbs>
        Categories /{" "}
        {Object.keys(categoryBooksList).length > 0
          ? categoryBooksList[0].kategori
          : ""}
      </Breadcrumbs>
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryBooksList.map((item) => (
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

export default categoryBooks;
