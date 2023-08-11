import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NavbarTest from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React from "react";

export default function Categories() {
  const categoriesList = [
    "Fiksi Remaja",
    "Romansa",
    "Misteri",
    "Komik",
    "Bisnis",
    "Teknologi",
    "Edukasi",
    "Makanan",
    "Motivasi",
    "Agama",
    "Komik",
    "Fiksi Dewasa",
  ];

  const color = [
    "red",
    "green",
    "blue",
    "yellow",
    "red",
    "green",
    "blue",
    "yellow",
    "red",
    "green",
    "blue",
    "yellow",
  ];

  return (
    <>
      <NavbarTest />
      <Breadcrumbs>Categories</Breadcrumbs>
      <div className="container mx-auto flex flex-col px-4 lg:px-8">
        <h1 className="text-center mb-16">Kategori Buku</h1>
        <div className="flex flex-wrap justify-between gap-10">
          {categoriesList.map((category, i) => (
            <div
              key={i}
              className={`flex items-center w-full sm:w-[45%] md:w-[29%] lg:w-[21%] h-40 rounded-2xl hover:scale-105 duration-300 bg-${color[i]}-300`}
            >
              <div className="w-full h-full">
                <button className="text-2xl w-full h-full text-left font-semibold text-black">
                  <span className="pl-4">{category}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
