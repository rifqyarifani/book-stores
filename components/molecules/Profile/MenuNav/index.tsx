import BtnMenuNav from "@/components/atoms/Profile/Button/BtnMenuNav";
import React from "react";

type Props = {
  isActiveIndex: number;
  setIsActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuNav(props: Props) {
  const { isActiveIndex, setIsActiveIndex, showMenu, setShowMenu } = props;

  return (
    <div className="flex flex-col border-y border-gray-300 font-semibold gap-4 py-2">
      <BtnMenuNav
        isActiveIndex={isActiveIndex}
        setIsActiveIndex={setIsActiveIndex}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        index={1}
      >
        Pengaturan Profil
      </BtnMenuNav>
      <BtnMenuNav
        isActiveIndex={isActiveIndex}
        setIsActiveIndex={setIsActiveIndex}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        index={2}
      >
        Langganan
      </BtnMenuNav>
      <BtnMenuNav
        isActiveIndex={isActiveIndex}
        setIsActiveIndex={setIsActiveIndex}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        index={3}
      >
        Riwayat Transaksi
      </BtnMenuNav>
      <BtnMenuNav
        isActiveIndex={isActiveIndex}
        setIsActiveIndex={setIsActiveIndex}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        index={4}
      >
        Ubah Password
      </BtnMenuNav>
    </div>
  );
}
