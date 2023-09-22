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
    </>
  );
};

export default Admin;
