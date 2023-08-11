import Link from "next/link";
import React from "react";

export default function index(props: PricingList) {
  const { id, title, price, description, details } = props;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="flex justify-center items-center">
            <span className="currency">Rp</span>
            <span className="value">{price}</span>
          </div>
          <div className="frequency">/bulan</div>
          <p>{description}</p>
          <ul className="space-y-2 text-left list">
            {details.map((item, i) => (
              <li key={i} className="flex flex-col h-full justify-between">
                <div className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>{item}</div>
                </div>
                <div></div>
              </li>
            ))}
          </ul>
          <div className="button-wrapper">
            <Link className="btn-solid-reg page-scroll" href="/payment">
              Beli sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
