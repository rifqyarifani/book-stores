import FormData from "@/components/molecules/Profile/FormData";
import FormPicture from "@/components/molecules/Profile/FormPicture";
import React from "react";

export default function Settings() {
  return (
    <>
      <h1 className="text-center mb-16">Profil Pengguna</h1>
      <FormPicture />
      <p className="text-black font-semibold">Email</p>
      <p className="border-b border-gray-300 pb-2">user@mail.com</p>
      <FormData
        label="Nama"
        name="name"
        type="text"
        value="User Satu"
        focus={true}
      />
      <FormData
        label="Jenis Kelamin"
        name="gender"
        type="select"
        value="male"
      />
      <FormData
        label="Tanggal Lahir"
        name="dateOfBirth"
        type="date"
        value="2001-01-01"
        focus={true}
      />
      <FormData
        label="Nomor Telepon"
        name="phone"
        type="number"
        value="8123456789"
        focus={true}
      />
      <FormData
        label="Alamat"
        name="address"
        type="text"
        value="Jl. User, Kecamatan User"
        focus={true}
      />
    </>
  );
}
