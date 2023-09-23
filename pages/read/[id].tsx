import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllBooks, readBook } from "@/services/book.services";
import { GetStaticPropsContext } from "next";
import { useCookies } from "react-cookie";
import Spinner from "@/components/Spinner";

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

  return {
    props: { id },
  };
};

type Props = {
  id: string;
};

const BookDetails = (props: Props) => {
  const { id } = props;
  const bookId = parseInt(id);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string>();
  const [cookie] = useCookies(["token"]);

  const getBookContent = async () => {
    setLoading(true);
    await readBook(cookie.token, bookId, (status: boolean, res: any) => {
      if (status) {
        setContent(res.data);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    getBookContent();
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs>Baca</Breadcrumbs>
      <div className="container px-4 md:px-8 py-8 h-60 flex justify-center items-center">
        {loading ? <Spinner /> : <p>{content}</p>}
      </div>
      <Footer />
    </>
  );
};

export default BookDetails;
