import SubMenuNav from "@/components/molecules/Profile/SubMenuNav";
import React, { useState } from "react";

export default function Subscription() {
  const [isActiveIndex, setIsActiveIndex] = useState(1);

  return (
    <>
      <h1 className="text-center mb-16">Paket Langganan Pengguna</h1>
      <div className="grid grid-cols-2">
        <SubMenuNav
          isActive={isActiveIndex === 1}
          onClick={() => setIsActiveIndex(1)}
        >
          Aktif
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 2}
          onClick={() => setIsActiveIndex(2)}
        >
          Kadaluarsa
        </SubMenuNav>
      </div>
      <div className="py-4">
        {isActiveIndex === 1 && <p>Tidak memiliki langganan aktif</p>}
        {isActiveIndex === 2 && <p>Tidak memiliki langganan kadaluarsa</p>}
      </div>
    </>
  );
}
