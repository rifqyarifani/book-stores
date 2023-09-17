import FormData from "@/components/molecules/Profile/FormData";
import FormPicture from "@/components/molecules/Profile/FormPicture";
import React from "react";

type Props = {
  data: User;
};

export default function Settings(props: Props) {
  return (
    <>
      <h1 className="text-center mb-16">Profil Pengguna</h1>
      <FormPicture src={props.data.avatar} />
      <p className="text-black font-semibold">Email</p>
      <p className="border-b border-gray-300 pb-2">{props.data.email}</p>
      <FormData
        label="Nama"
        name="name"
        type="text"
        value={props.data.name}
        focus={true}
      />
      <FormData
        label="Jenis Kelamin"
        name="gender"
        type="select"
        value={props.data.gender}
      />
      <FormData
        label="Tanggal Lahir"
        name="dateOfBirth"
        type="date"
        value={props.data.date_of_birth?.toDateString()}
        focus={true}
      />
      <FormData
        label="Nomor Telepon"
        name="phone"
        type="number"
        value={props.data.phone_number}
        focus={true}
      />
      <FormData
        label="Alamat"
        name="address"
        type="text"
        value={props.data.address}
        focus={true}
      />
    </>
  );
}
