import React from "react";
import CardBook from "@/components/molecules/CardBook";

export default function index() {
  return (
    <>
      <div
        id="features"
        className="flex flex-row md:flex-col items-center justify-between container sm:px-4 lg:px-8"
      >
        <h2 className="mb-5">Kategori Buku</h2>
        <div className=" sm:gap-8 flex flex-col md:flex-row items-center">
          <CardBook category="Fiksi" images="images/fiksi.svg" />
          <CardBook category="Sejarah" images="images/history.svg" />
          <CardBook category="Gaya Hidup" images="images/life style.svg" />
        </div>
      </div>
    </>
  );
}
