import React, { useState, useEffect } from "react";
import Navbar from "@/components/organisms/Admin/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getUserDetails } from "@/services/user.services";
import { useCookies } from "react-cookie";

const Admin = () => {
  const [userData, setUserData] = useState({} as User);
  const [cookie] = useCookies(["token"]);

  const userDetails = () => {
    getUserDetails(cookie.token as string, (status: boolean, res: any) => {
      if (status) {
        setUserData(res.data);
      }
    });
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <Navbar />
      <>
        <header
          id="header"
          className="text-center header py-28 md:pt-36 lg:text-left xl:pt-44 xl:pb-32 h-screen"
        >
          <div className=" flex flex-col md:flex-row items-center justify-center container sm:px-4 lg:px-8 w-full h-2/4">
            <h1>Selamat Datang di Panel Admin</h1>
          </div>
        </header>
      </>
    </>
  );
};

export default Admin;
