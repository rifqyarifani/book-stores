import React, { useEffect, useState } from "react";
import CardBookCategory from "@/components/molecules/CardBookCategory";
import Navbar from "@/components/organisms/Navbar";
import { fetchApi } from "@/components/services";

export default function allbook() {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
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
                      penulis={item.penulis}
                      deskripsi={item.deskripsi}
                      images={item.images}
                      kategori={item.kategori}
                    />
                  </div>
                ))}
              {Object.keys(dataList).length > 0 &&
                dataList.map((item, i) => (
                  <div key={i}>
                    <CardBookCategory
                      id={item.id}
                      title={item.title}
                      penulis={item.penulis}
                      deskripsi={item.deskripsi}
                      images={item.images}
                      kategori={item.kategori}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
