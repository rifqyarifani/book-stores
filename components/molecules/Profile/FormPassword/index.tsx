import { BtnSolidReg } from "@/components/atoms/Profile/Button/BtnSolid";
import FormInput from "@/components/atoms/Profile/FormInput";
import FormLabel from "@/components/atoms/Profile/FormLabel";
import React from "react";

type Props = {
  handleChangePassword: React.FormEventHandler<HTMLFormElement>;
};

export default function FormPassword(props: Props) {
  return (
    <form onSubmit={props.handleChangePassword}>
      <div className="flex flex-col">
        <FormLabel label="Password Lama" name="old_password" />
        <FormInput
          type="password"
          name="old_password"
          placeholder="Masukan password lama"
          focus={true}
        />
        <FormLabel label="Password Baru" name="new_password" />
        <FormInput
          type="password"
          name="new_password"
          placeholder="Masukan password baru"
        />
        <FormLabel label="Konfirmasi Password" name="confirmation_password" />
        <FormInput
          type="password"
          name="confirmation_password"
          placeholder="Konfirmasi password baru"
        />
      </div>
      <div className="text-center pt-10">
        <BtnSolidReg type="submit">Submit</BtnSolidReg>
      </div>
    </form>
  );
}
