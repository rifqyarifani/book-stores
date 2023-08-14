import React from "react";
import CardBook from "@/components/molecules/CardBook";

export default function index() {
  return (
    <>
      <div id="features" className=" px-16 flex flex-col items-center">
        <h2 className="mb-5">Book Category</h2>
        <div className=" sm:gap-8 flex flex-col md:flex-row items-center">
          <CardBook category="Fiksi" images="images/fiksi.svg"/>
          <CardBook category="Sejarah" images="images/history.svg"/>
          <CardBook category="Gaya Hidup" images="images/life style.svg" />
        </div>
      </div>
    </>
  );
}
