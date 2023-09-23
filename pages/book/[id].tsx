import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React from "react";
import Link from "next/link";
import { getAllBooks, getSingleBook } from "@/services/book.services";
import { GetStaticPropsContext } from "next";

export const getStaticPaths = async () => {
  const res = await getAllBooks();
  const books = res.data;
  const paths = books.map((book: bookDetails) => ({
    params: { id: book.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const id = params?.id;
  const res = await getSingleBook(parseInt(id as string));

  return {
    props: res.data,
  };
};

const BookDetails = (props: bookDetails) => {
  return (
    <>
      <Navbar />
      <Breadcrumbs>
        Buku / {Object.keys(props).length > 0 ? props.title : ""}
      </Breadcrumbs>
      <div className="container px-4 md:px-8 py-8">
        {Object.keys(props).length > 0 ? (
          <>
            <div className="flex items-start">
              <img
                src={`../${props.image}`}
                alt="alternative"
                className="w-1/4 object-contain"
              />
              <div className="pl-12 flex flex-col gap-4">
                <h3>{props.title}</h3>
                <img className="w-12 -ml-2" src="/svg/star5.svg" alt="Rating" />
                <p>Penulis : {props.author}</p>
                <h5>Deskripsi Buku</h5>
                <p>{props.description}</p>
              </div>
            </div>
            <div className="text-center mt-24">
              <Link className="btn-solid-lg" href={`/read/${props.id}`}>
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
