import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import PaymentPopup from "@/components/organisms/PaymentPopup";
import { getAllPricing, getSinglePricing } from "@/services/pricing.services";
import { GetStaticPropsContext } from "next";
import { useCookies } from "react-cookie";
import { newTransaction } from "@/services/transaction.services";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await getAllPricing();
  const pricings = res.data;
  const paths = pricings.map((pricing: PricingList) => ({
    params: { id: pricing.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const id = params?.id;
  const res = await getSinglePricing(parseInt(id as string));

  return {
    props: res.data,
  };
};

const payment = (props: PricingList) => {
  const { id, title, price } = props;
  const [showPayment, setShowPayment] = useState(false);
  const [cookie] = useCookies(["token"]);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      account_number: e.currentTarget.account_number.value,
      first_name: e.currentTarget.first_name.value,
      second_name: e.currentTarget.second_name.value,
    };

    newTransaction(cookie.token, id, data, (status: boolean, res: any) => {
      if (status) {
        setShowPayment(!showPayment);
        alert("Transaksi berhasil. Silahkan melakukan pembayaran");
      } else {
        alert("Transaksi Gagal");
        console.log(res.response.data.message);
      }
    });
  };

  const handleConfirmation = () => {
    setShowPayment(!showPayment);
    router.push("/profile");
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs>Pembayaran</Breadcrumbs>
      <form onSubmit={handleSubmit}>
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
                    <label
                      className="text-xs font-semibold"
                      htmlFor="account_number"
                    >
                      Nomor Rekening
                    </label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      type="number"
                      name="account_number"
                      id="account_number"
                      placeholder="Masukan nomor rekening anda"
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      className="text-xs font-semibold"
                      htmlFor="first_name"
                    >
                      Nama Depan di Rekening
                    </label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Nama Depan"
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      className="text-xs font-semibold"
                      htmlFor="second_name"
                    >
                      Nama Kedua di Rekening
                    </label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      name="second_name"
                      id="second_name"
                      placeholder="Nama Kedua"
                      required
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
                  <span className="text-sm font-semibold">Paket</span>
                  <span className="text-sm ml-auto font-semibold">{title}</span>
                </div>
              </div>
              <div className="px-8 mt-4 border-t pt-4">
                <div className="flex items-end justify-between">
                  <span className="font-bold text-black">Total Pembayaran</span>
                  <span className="font-semibold text-black">Rp. {price}</span>
                </div>
              </div>
              <div className="flex items-center px-8 mt-8">
                <input id="termsConditions" type="checkbox" required />
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
                  type="submit"
                >
                  Mulai Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {showPayment && <PaymentPopup onClick={handleConfirmation} />}
      <Footer />
    </>
  );
};

export default payment;
