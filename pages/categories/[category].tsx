import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React from "react";
import { getAllCategories, getBooksByCategory } from "@/services/book.services";
import { GetStaticPropsContext } from "next";
import CardBookCategory from "@/components/molecules/CardBookCategory";

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
            result.map((item, i) => (
              <div key={i}>
                <CardBookCategory
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  description={item.description}
                  image={item.image}
                  category_id={item.category_id}
                />
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
