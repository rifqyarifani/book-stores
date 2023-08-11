import { BtnSolidReg } from "@/components/atoms/Profile/Button/BtnSolid";
import ProfilePicture from "@/components/atoms/Profile/Menu/ProfilePicture";
import React from "react";

export default function FormPicture() {
  return (
    <div className="flex flex-col items-center">
      <ProfilePicture w={210} h={210} />
      <form className="flex flex-col items-center gap-4 pt-4 pb-10">
        <label htmlFor="picture" className="font-semibold text-black">
          Ganti gambar
        </label>
        <input
          type="file"
          name="picture"
          id="picture"
          className="border border-gray-300 w-4/5 rounded"
        />
        <BtnSolidReg type="submit">Simpan</BtnSolidReg>
      </form>
    </div>
  );
}
