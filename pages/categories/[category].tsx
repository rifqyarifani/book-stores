import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React from "react";
import Link from "next/link";
import { getAllCategories, getBooksByCategory } from "@/services/book.services";
import { GetStaticPropsContext } from "next";

type Props = {
  result: bookDetails[];
  category: string;
};

export const getStaticPaths = async () => {
  const res = await getAllCategories();
  const categories = res.data;
  const paths = categories.map((category: CategoryList) => ({
    params: { category: category.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const category = params?.category;
  const res = await getBooksByCategory(category as string);
  const result = res.data;

  return {
    props: { result, category },
  };
};

const categoryBooks = (props: Props) => {
  const { result, category } = props;
  return (
    <>
      <Navbar />
      <Breadcrumbs>Categories / {category ? category : ""}</Breadcrumbs>
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(result).length > 0 ? (
            result.map((item) => (
              <div
                className="relative overflow-hidden bg-white shadow-md rounded-xl"
                key={item.id}
              >
                <Link href={`/book/${item.id}`}>
                  <img
                    className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
                    src={item.image}
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
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default categoryBooks;
