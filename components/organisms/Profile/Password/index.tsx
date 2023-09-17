import FormPassword from "@/components/molecules/Profile/FormPassword";
import React from "react";

type Props = {
  handleChangePassword: React.FormEventHandler<HTMLFormElement>;
};

export default function Password(props: Props) {
  return (
    <>
      <h1 className="text-center mb-16">Ubah Password</h1>
      <FormPassword handleChangePassword={props.handleChangePassword} />
    </>
  );
}
