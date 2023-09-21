import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Menu from "@/components/organisms/Profile/Menu";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Settings from "@/components/organisms/Profile/Settings";
import Subscription from "@/components/organisms/Profile/Subscription";
import Transactions from "@/components/organisms/Profile/Transactions";
import Password from "@/components/organisms/Profile/Password";
import BtnShowMenuMobile from "@/components/atoms/Profile/Button/BtnShowMenuMobile";
import {
  changePassword,
  getUserDetails,
  updateUserDetails,
  uploadAvatar,
} from "@/services/user.services";
import { useCookies } from "react-cookie";

export default function profile() {
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState({} as User);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [cookie] = useCookies(["token"]);

  const userDetails = () => {
    getUserDetails(cookie.token as string, (status: boolean, res: any) => {
      if (status) {
        setUserData(res.data);
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files as FileList;
    const test = file?.[0];

    setSelectedFile(test);
  };

  const handleUploadAvatar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      uploadAvatar(cookie.token, selectedFile, (status: boolean, res: any) => {
        if (status) {
          alert("berhasil upload gambar");
          userDetails();
        } else {
          alert("gagal upload gambar");
          console.log(res);
        }
      });
    }
  };

  const handleUpdateUserDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: e.currentTarget.username?.value,
      gender: e.currentTarget.gender?.value,
      date_of_birth: e.currentTarget.date_of_birth?.value,
      phone_number: e.currentTarget.phone_number?.value,
      address: e.currentTarget.address?.value,
    };

    updateUserDetails(cookie.token, data, (status: boolean, res: any) => {
      if (status) {
        alert("berhasil update data");
        userDetails();
      } else {
        alert("gagal update data");
        console.log(res);
      }
    });
  };

  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const old_password = e.currentTarget.old_password.value;
    const new_password = e.currentTarget.new_password.value;
    const confirmation_password = e.currentTarget.confirmation_password.value;

    if (!old_password || !new_password || !confirmation_password) {
      alert("Semua field harus diisi!");
      return;
    }

    if (new_password !== confirmation_password) {
      alert("Konfirmasi password salah");
      return;
    }

    const data = {
      old_password: old_password,
      new_password: new_password,
    };

    changePassword(cookie.token, data, (status: boolean, res: any) => {
      if (status) {
        alert("Berhasil mengubah password");
        window.location.href = "/profile";
        return;
      } else {
        alert(res.response?.data.message);
      }
    });
  };

  useEffect(() => {
    userDetails();
  }, []);

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
          data={userData}
        />
        <div className="w-full border-gray-300 lg:border-l lg:pl-8 lg:w-3/4">
          {isActiveIndex === 1 && (
            <Settings
              data={userData}
              handleUploadAvatar={handleUploadAvatar}
              handleFileUpload={handleFileUpload}
              handleUpdateUserDetails={handleUpdateUserDetails}
            />
          )}
          {isActiveIndex === 2 && <Subscription />}
          {isActiveIndex === 3 && <Transactions />}
          {isActiveIndex === 4 && (
            <Password handleChangePassword={handleChangePassword} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
