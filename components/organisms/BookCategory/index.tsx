import React from "react";
import CardBook from "@/components/molecules/CardBook";

export default function index() {
  return (
    <>
      <div id="features" className="cards-1">
        <h2 className="mb-5">Book Category</h2>
        <div className="container px-4 sm:px-8 xl:px-4">
          <CardBook category="Fiksi" images="images/fiksi.svg"/>
          <CardBook category="Sejarah" images="images/history.svg"/>
          <CardBook category="Gaya Hidup" images="images/life style.svg" />
        </div>
      </div>
    </>
  );
}
