import BtnChangeData from "@/components/atoms/Profile/Button/BtnChangeData";
import {
  BtnSolidReg,
  BtnSolidSec,
} from "@/components/atoms/Profile/Button/BtnSolid";
import FormInput from "@/components/atoms/Profile/FormInput";
import FormLabel from "@/components/atoms/Profile/FormLabel";
import React, { useState } from "react";
import FormSelectGender from "../FormSelectGender";

type Props = {
  label: string;
  name: string;
  type: "text" | "number" | "date" | "select";
  value?: string | number;
  focus?: boolean;
  handleUpdateUserDetails: React.FormEventHandler<HTMLFormElement>;
};

export default function FormData(props: Props) {
  const { label, name, type, value, focus } = props;

  const [showInput, setShowInput] = useState(false);

  let displayValue: string;
  if (type === "number") {
    if (value == null) {
      displayValue = "Belum diubah";
    } else {
      displayValue = `+62${value}`;
    }
  } else if (type === "select") {
    if (value === "male") {
      displayValue = "Laki-laki";
    } else if (value === "female") {
      displayValue = "Perempuan";
    } else {
      displayValue = "Belum diubah";
    }
  } else if (type === "date") {
    if (value) {
      displayValue = value as string;
    } else {
      displayValue = "Belum diubah";
    }
  } else {
    if (value === null) {
      displayValue = "Belum diubah";
    } else {
      displayValue = value as string;
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    props.handleUpdateUserDetails(e);
    setShowInput(!showInput);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between py-2 border-b border-gray-300"
    >
      <div className="w-full">
        <FormLabel label={label} name={name} />
        {!showInput && <p>{displayValue}</p>}
        {showInput && (
          <>
            <div className="flex items-center">
              {type === "number" && <span className="pr-2">+62</span>}
              {type === "select" ? (
                <FormSelectGender name={name} />
              ) : (
                <FormInput
                  type={type}
                  name={name}
                  value={value}
                  focus={focus}
                />
              )}
            </div>
            <div className="flex justify-end gap-4 m-2">
              <BtnSolidSec
                type="button"
                isShow={() => setShowInput(!showInput)}
              >
                Batal
              </BtnSolidSec>
              <BtnSolidReg
                type="submit"
                isShow={() => setShowInput(!showInput)}
              >
                Simpan
              </BtnSolidReg>
            </div>
          </>
        )}
      </div>
      {!showInput && <BtnChangeData isShow={() => setShowInput(!showInput)} />}
    </form>
  );
}
