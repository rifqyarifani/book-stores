import React, { useEffect, useState } from "react";
import CardBookCategory from "@/components/molecules/CardBookCategory";
import Link from "next/link";
import { getAllBooks } from "@/services/book.services";

export default function index() {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const getData = async () => {
    const data = await getAllBooks();
    if (data) {
      const selectedData = data.data.slice(0, 6);
      setDataList(selectedData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-8 pb-12 bg-gray">
      <div className="container px-4 sm:px-8">
        <div className="flex justify-between">
          <h5 className="lg:max-w-xl lg:text-4xl">Koleksi</h5>
          <Link className="btn-solid-lg secondary" href="/allbook">
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-1 mx-16 gap-8 md:mx-0 md:grid-cols-2 lg:mx-0 lg:grid-cols-3 xl:mx-0">
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
  );
}
