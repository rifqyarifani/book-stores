import React from "react";

type Props = {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
  isShow?: () => void;
};

export function BtnSolidReg(props: Props) {
  const { children, type } = props;

  return (
    <button
      type={type}
      className="inline-block py-3.5 px-12 rounded-3xl font-semibold text-sm leading-none bg-regular text-white border border-solid border-regular transition-all duration-200 hover:bg-transparent hover:text-regular"
    >
      {children}
    </button>
  );
}

export function BtnSolidSec(props: Props) {
  const { children, type, isShow } = props;
  return (
    <button
      className="inline-block py-3.5 px-12 rounded-3xl font-semibold text-sm leading-none bg-secondary text-white border border-solid border-secondary transition-all duration-200 hover:bg-transparent hover:text-secondary"
      onClick={isShow}
      type={type}
    >
      {children}
    </button>
  );
}
