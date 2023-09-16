import React, { useEffect, useState } from "react";
import CardBookCategory from "@/components/molecules/CardBookCategory";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { getAllBooks } from "@/services/book.services";

export default function allbook() {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const getData = async () => {
    const data = await getAllBooks();
    if (data) {
      setDataList(data.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="pt-8 pb-12 bg-gray">
          <div className="container px-4 sm:px-8">
            <div className="flex justify-between">
              <h5 className="lg:max-w-xl lg:text-4xl">Koleksi</h5>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(dataList).length > 0 &&
                dataList.map((item, i) => (
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
                ))}
              {Object.keys(dataList).length > 0 &&
                dataList.map((item, i) => (
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
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
