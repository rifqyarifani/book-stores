import { BtnSolidReg } from "@/components/atoms/Profile/Button/BtnSolid";
import ProfilePicture from "@/components/atoms/Profile/Menu/ProfilePicture";
import React from "react";

type Props = {
  src: string | undefined;
  handleUploadAvatar: React.FormEventHandler<HTMLFormElement>;
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>;
};

export default function FormPicture(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <ProfilePicture w={210} h={210} src={props.src} />
      <form
        onSubmit={props.handleUploadAvatar}
        className="flex flex-col items-center gap-4 pt-4 pb-10"
      >
        <label htmlFor="avatar" className="font-semibold text-black">
          Ganti gambar
        </label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="border border-gray-300 w-4/5 rounded"
          onChange={props.handleFileUpload}
        />
        <BtnSolidReg type="submit">Simpan</BtnSolidReg>
      </form>
    </div>
  );
}
