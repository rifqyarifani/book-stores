import Link from "next/link";
import React from "react";

export default function index(props: bookDetails) {
  const { id, title, author, description, image } = props;

  return (
    <>
      <div
        className="relative overflow-hidden bg-white shadow-md rounded-xl"
        key={props.id}
      >
        <Link href={`/book/${id}`}>
          <img
            className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
            src={image}
            alt="picturebook"
          />
        </Link>
        <div className="px-4 text-left">
          <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </h5>
          <p className="">{author}</p>
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
            {description}
          </p>
          <span className="rating-more">
            <img className="rating" src="/svg/star5.svg" alt="Rating" />
            <Link className="more" href={`/book/${id}`}>
              Selengkapnya
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
