import SubMenuNav from "@/components/molecules/Profile/SubMenuNav";
import React, { useState } from "react";

export default function Transactions() {
  const [isActiveIndex, setIsActiveIndex] = useState(1);

  return (
    <>
      <h1 className="text-center mb-16">Riwayat Transaksi Pengguna</h1>
      <div className="grid grid-cols-4">
        <SubMenuNav
          isActive={isActiveIndex === 1}
          onClick={() => setIsActiveIndex(1)}
        >
          Semua Transaksi
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 2}
          onClick={() => setIsActiveIndex(2)}
        >
          Menunggu Pembayaran
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 3}
          onClick={() => setIsActiveIndex(3)}
        >
          Transaksi Gagal
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 4}
          onClick={() => setIsActiveIndex(4)}
        >
          Transaksi Sukses
        </SubMenuNav>
      </div>
      <div className="py-4">
        {isActiveIndex === 1 && <p>Tidak memiliki riwayat transaksi</p>}
        {isActiveIndex === 2 && (
          <p>Tidak memiliki transaksi yang perlu dibayar</p>
        )}
        {isActiveIndex === 3 && <p>Tidak memiliki transaksi gagal</p>}
        {isActiveIndex === 4 && <p>Tidak memiliki transaksi sukses</p>}
      </div>
    </>
  );
}
