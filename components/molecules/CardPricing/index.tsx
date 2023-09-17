import Link from "next/link";
import React from "react";

export default function index(props: PricingList) {
  const { id, title, price, description, details } = props;
  return (
    <>
      <div className="card relative block bg-white max-w-xs mx-auto mb-24 border border-gray-300 rounded-lg">
        <div className=" py-8 px-7">
          <div className="mb-4 text-secondary font-bold text-2xl text-center">
            {title}
          </div>
          <div className="flex justify-center items-center">
            <span className=" mr-1 text-gray-700 text-3xl">Rp</span>
            <span className=" text-gray-700 font-semibold text-7xl text-center">
              {price}
            </span>
          </div>
          <div className=" mb-6 text-xl text-center">/bulan</div>
          <p className=" mb-5 text-left">{description}</p>
          <ul className="space-y-2 text-left list">
            {JSON.parse(details).map((item: string, i: number) => (
              <li key={i} className="flex flex-col h-full justify-between">
                <div className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>{item}</div>
                </div>
                <div></div>
              </li>
            ))}
          </ul>
          <div className=" absolute right-0 left-0 -bottom-6">
            <Link
              className="btn-solid-reg page-scroll hover:bg-white"
              href="/payment"
            >
              Beli sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
