import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBooksByCategory } from "@/services/book.services";

const categoryBooks = () => {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const router = useRouter();
  const category = router.query.category;

  const getData = async (category: string) => {
    const param = category.toLowerCase();
    if (param !== "fiksi" && param !== "sejarah" && param !== "gaya hidup") {
      window.location.href = "/404";
    }
    const data = await getBooksByCategory(param);
    if (data.data) {
      setDataList(data.data);
    }
  };

  useEffect(() => {
    if (category !== undefined) getData(category as string);
  }, [category]);

  return (
    <>
      <Navbar />
      <Breadcrumbs>
        Categories / {category ? (category as string) : ""}
      </Breadcrumbs>
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(dataList).length > 0 ? (
            dataList.map((item) => (
              <div
                className="relative overflow-hidden bg-white shadow-md rounded-xl"
                key={item.id}
              >
                <Link href={`/book/${item.id}`}>
                  <img
                    className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
                    src={".././" + item.image}
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
