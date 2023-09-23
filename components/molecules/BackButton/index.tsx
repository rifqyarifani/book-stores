import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const index = (props: any) => {
  return (
    <div className="flex">
      <Link
        href={`/admin/${props.id}`}
        className=" bg-regular text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className=" text-2xl" />
      </Link>
    </div>
  );
};

export default index;
