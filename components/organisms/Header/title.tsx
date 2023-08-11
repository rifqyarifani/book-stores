import Link from "next/link";
import React from "react";

export default function title() {
  return (
    <>
      <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
        <h1 className=" h1-large title-header">VACA <span className="text-lg md:text-xl xl:text-2xl text-seconday title-header2">"Baca dimana saja, kapan saja"</span></h1>
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
