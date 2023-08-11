import React, { useState } from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Menu from "@/components/organisms/Profile/Menu";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Settings from "@/components/organisms/Profile/Settings";
import Subscription from "@/components/organisms/Profile/Subscription";
import Transactions from "@/components/organisms/Profile/Transactions";
import Password from "@/components/organisms/Profile/Password";
import BtnShowMenuMobile from "@/components/atoms/Profile/Button/BtnShowMenuMobile";

export default function profile() {
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navbar />
      <Breadcrumbs>Profile</Breadcrumbs>
      <BtnShowMenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="container flex flex-col px-4 mx-auto md:px-8 lg:flex-row lg:px-8">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          isActiveIndex={isActiveIndex}
          setIsActiveIndex={setIsActiveIndex}
        />
        <div className="w-full border-gray-300 lg:border-l lg:pl-8 lg:w-3/4">
          {isActiveIndex === 1 && <Settings />}
          {isActiveIndex === 2 && <Subscription />}
          {isActiveIndex === 3 && <Transactions />}
          {isActiveIndex === 4 && <Password />}
        </div>
      </div>
      <Footer />
    </>
  );
}
