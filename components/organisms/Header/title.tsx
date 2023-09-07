import Link from "next/link";
import React from "react";

export default function title() {
  return (
    <>
      <div className=" w-2/3 sm:w-1/3">
        <h1 className=" h1-large title-header">VACA</h1>
        <span className=" font-bold text-lg md:text-xl xl:text-2xl text-seconday title-header2">"Baca dimana saja, kapan saja"</span>
        <p className="mb-8 p-large">
          Ayo membaca bersama kami, banyak pilihan buku sesuai yang kamu inginkan disini.
        </p>
        <Link className="btn-solid-lg" href="/search">
          Cari buku
        </Link>
      </div>
    </>
  );
}
