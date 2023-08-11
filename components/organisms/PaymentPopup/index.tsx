import React from "react";

type Props = {
  onClick: () => void;
};
const PaymentPopup = (props: Props) => {
  const { onClick } = props;
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 z-40" />
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col p-12 items-center bg-white border border-gray-300 rounded-lg gap-8">
            <span className="text-xl font-bold text-black">
              Silakan transfer ke rekening kami
            </span>
            <div className="flex flex-col items-center font-bold text-black">
              <span>Bank BCA</span>
              <span className="font-thin">0000 0000 0000</span>
              <span>Atas Nama</span>
              <span className="font-thin">Pt. Vaca Media Digital</span>
            </div>
            <button className="btn-solid-reg" onClick={onClick}>
              Konfirmasi Pembayaran
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPopup;
