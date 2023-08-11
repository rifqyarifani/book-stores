import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React, { useState } from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import PaymentPopup from "@/components/organisms/PaymentPopup";

const payment = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
      <Navbar />
      <Breadcrumbs>Pembayaran</Breadcrumbs>
      <div className=" container px-4 md:px-8 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:pt-8">
        <div className="lg:col-span-2">
          <span className="text-md text-black font-bold">
            Metode Pembayaran
          </span>
          <div className="bg-white rounded mt-4 shadow-lg">
            <div className="border-t">
              <div className="flex items-center px-8 py-5">
                <input
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                  type="radio"
                />
                <label className="text-sm font-medium ml-4">
                  Transfer Bank
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2">
                  <label className="text-xs font-semibold" htmlFor="cardNumber">
                    Nomor Rekening
                  </label>
                  <input
                    className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="number"
                    placeholder="Masukan nomor rekening anda"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" htmlFor="firstName">
                    Nama Depan di Rekening
                  </label>
                  <input
                    className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="Nama depan"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" htmlFor="lastName">
                    Nama Belakang di Rekening
                  </label>
                  <input
                    className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="Nama belakang"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-md text-black text-center font-bold">
            Ringkasan Pembayaran
          </p>
          <div className="bg-white rounded mt-4 shadow-lg py-6">
            <div className="px-8">
              <div className="flex items-end">
                <span className="text-sm font-semibold">Harga</span>
                <span className="text-sm ml-auto font-semibold">
                  Rp. 49.999
                </span>
                <span className="text-xs text-gray-500 mb-px">/bulan</span>
              </div>
            </div>
            <div className="px-8 mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Pajak</span>
                <span className="text-sm text-gray-500 mb-px">10%</span>
              </div>
            </div>
            <div className="px-8 mt-4 border-t pt-4">
              <div className="flex items-end justify-between">
                <span className="font-bold text-black">Total Pembayaran</span>
                <span className="font-semibold text-black">Rp. 55.000</span>
              </div>
            </div>
            <div className="flex items-center px-8 mt-8">
              <input id="termsConditions" type="checkbox" />
              <label
                className="text-xs text-gray-500 ml-2"
                htmlFor="termsConditions"
              >
                Data yang saya isikan sudah sesuai.
              </label>
            </div>
            <div className="flex flex-col px-8 pt-4">
              <button
                className="btn-solid-reg flex items-center justify-center text-sm font-medium w-full h-10 rounded text-blue-50"
                onClick={() => setShowPayment(!showPayment)}
              >
                Mulai Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPayment && (
        <PaymentPopup onClick={() => setShowPayment(!showPayment)} />
      )}
      <Footer />
    </>
  );
};

export default payment;
