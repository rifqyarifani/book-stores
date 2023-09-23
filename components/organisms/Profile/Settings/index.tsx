import FormData from "@/components/molecules/Profile/FormData";
import FormPicture from "@/components/molecules/Profile/FormPicture";
import React from "react";

type Props = {
  data: User;
  handleUploadAvatar: React.FormEventHandler<HTMLFormElement>;
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>;
  handleUpdateUserDetails: React.FormEventHandler<HTMLFormElement>;
};

export default function Settings(props: Props) {
  const date = props.data.date_of_birth?.toString().slice(0, 10);
  return (
    <>
      <h1 className="text-center mb-16">Profil Pengguna</h1>
      <FormPicture
        src={props.data.avatar}
        handleUploadAvatar={props.handleUploadAvatar}
        handleFileUpload={props.handleFileUpload}
      />
      <p className="text-black font-semibold">Email</p>
      <p className="border-b border-gray-300 pb-2">{props.data.email}</p>
      <FormData
        label="Nama"
        name="username"
        type="text"
        value={props.data.name}
        focus={true}
        handleUpdateUserDetails={props.handleUpdateUserDetails}
      />
      <FormData
        label="Jenis Kelamin"
        name="gender"
        type="select"
        value={props.data.gender}
        handleUpdateUserDetails={props.handleUpdateUserDetails}
      />
      <FormData
        label="Tanggal Lahir"
        name="date_of_birth"
        type="date"
        value={date}
        focus={true}
        handleUpdateUserDetails={props.handleUpdateUserDetails}
      />
      <FormData
        label="Nomor Telepon"
        name="phone_number"
        type="number"
        value={props.data.phone_number}
        focus={true}
        handleUpdateUserDetails={props.handleUpdateUserDetails}
      />
      <FormData
        label="Alamat"
        name="address"
        type="text"
        value={props.data.address}
        focus={true}
        handleUpdateUserDetails={props.handleUpdateUserDetails}
      />
    </>
  );
}
