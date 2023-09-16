import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getSingleBook } from "@/services/book.services";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState({} as bookDetails);

  const router = useRouter();
  const id = router.query.id;

  const getData = async (param: number) => {
    const data = await getSingleBook(param);
    if (data.data) {
      setBookDetails(data.data);
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
    <>
      <Navbar />
      <Breadcrumbs>
        Buku / {Object.keys(bookDetails).length > 0 ? bookDetails.title : ""}
      </Breadcrumbs>
      <div className="container px-4 md:px-8 py-8">
        {Object.keys(bookDetails).length > 0 ? (
          <>
            <div className="flex items-start">
              <img
                src={`../${bookDetails.image}`}
                alt="alternative"
                className="w-1/4 object-contain"
              />
              <div className="pl-12 flex flex-col gap-4">
                <h3>{bookDetails.title}</h3>
                <img className="w-12 -ml-2" src="/svg/star5.svg" alt="Rating" />
                <p>Penulis : {bookDetails.author}</p>
                <h5>Deskripsi Buku</h5>
                <p>{bookDetails.description}</p>
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
