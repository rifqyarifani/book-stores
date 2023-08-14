import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  images:string;
};

export default function index(props: Props) {
  const { category } = props;
  const { images } = props;

  return (
    <>
      <Link href={`/categories/${category}`} className=" flex flex-col items-center mb-8 bg-third rounded-2xl p-4 duration-300 hover:bg-secondary">
        <div className=" mb-4">
          <img src= {images} alt="alternative" className=" rounded-2xl"/>
        </div>
          <h5 className="">{category}</h5>
      </Link>
    </>
  );
}
