import Link from "next/link";
import React from "react";

export default function index(props: bookDetails) {
  const { id, title, author, description, image } = props;

  return (
    <>
      <div
        className="relative overflow-hidden bg-white shadow-md rounded-xl border border-white hover:border-regular"
        key={props.id}
      >
        <Link href={`/book/${id}`}>
          <img
            className="m-auto mt-8 mb-4 overflow-hidden w-44 h-56"
            src={image}
            alt="picturebook"
          />
        </Link>
        <div className=" flex flex-col px-4">
          <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xl text-gray-700">
            {title}
          </h5>
          <p className=" mb-2">{author}</p>
          {/* <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
            {description}
          </p> */}
          <span className=" flex flex-row justify-between text-md text-regular mb-4">
            <img className=" w-12" src="/svg/star5.svg" alt="Rating" />
            <Link className="more" href={`/book/${id}`}>
              Selengkapnya
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
