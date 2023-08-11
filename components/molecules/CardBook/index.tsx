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
      <Link href={`/categories/${category}`} className="card">
        <div className="mx-5 mb-4">
          <img src= {images} alt="alternative" className="rounded-2xl"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <p className="mb-4">
            You sales force can use the app on any smartphone platform without
            compatibility issues
          </p>
        </div>
      </Link>
    </>
  );
}
