import { BtnSolidReg } from "@/components/atoms/Profile/Button/BtnSolid";
import FormInput from "@/components/atoms/Profile/FormInput";
import FormLabel from "@/components/atoms/Profile/FormLabel";
import React from "react";

export default function FormPassword() {
  return (
    <form>
      <div className="flex flex-col">
        <FormLabel label="Password Lama" name="oldPassword" />
        <FormInput
          type="password"
          name="oldPassword"
          placeholder="Masukan password lama"
          focus={true}
        />
        <FormLabel label="Password Baru" name="newPassword" />
        <FormInput
          type="password"
          name="newPassword"
          placeholder="Masukan password baru"
        />
        <FormLabel label="Konfirmasi Password" name="confirmNewPassword" />
        <FormInput
          type="password"
          name="confirmNewPassword"
          placeholder="Konfirmasi password baru"
        />
      </div>
      <div className="text-center pt-10">
        <BtnSolidReg type="submit">Submit</BtnSolidReg>
      </div>
    </form>
  );
}
