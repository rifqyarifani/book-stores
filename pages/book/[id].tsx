import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApi } from "@/components/services";
import Link from "next/link";

const BookDetails = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [bookDetails, setBookDetails] = useState([] as bookDetails[]);

  const router = useRouter();
  const id = router.query.id;

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const details = dataList.filter((book) => book.id === Number(id));
    setBookDetails(details);
  }, [dataList]);

  return (
    <>
      <Navbar />
      <Breadcrumbs>
        Buku / {Object.keys(bookDetails).length > 0 ? bookDetails[0].title : ""}
      </Breadcrumbs>
      <div className="container px-4 md:px-8 py-8">
        {Object.keys(bookDetails).length > 0 ? (
          <>
            <div className="flex items-start">
              <img
                src={`/images/${bookDetails[0].images}`}
                alt="alternative"
                className="w-1/4 object-contain"
              />
              <div className="pl-12 flex flex-col gap-4">
                <h3>{bookDetails[0].title}</h3>
                <img className="w-12 -ml-2" src="/svg/star5.svg" alt="Rating" />
                <p>Penulis : {bookDetails[0].penulis}</p>
                <h5>Deskripsi Buku</h5>
                <p>{bookDetails[0].deskripsi}</p>
              </div>
            </div>
            <div className="text-center mt-24">
              <Link className="btn-solid-lg" href="#">
                Baca Buku
              </Link>
            </div>
          </>
        ) : (
          <div className="h-52 flex flex-col gap-4 items-center justify-center">
            <h2>Loading...</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookDetails;
