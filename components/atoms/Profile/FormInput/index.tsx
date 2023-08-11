import React, { useEffect, useRef } from "react";

type Props = {
  type: "text" | "number" | "date" | "select" | "password";
  name: string;
  value?: string | number;
  placeholder?: string;
  focus?: boolean;
};
export default function FormInput(props: Props) {
  const { type, name, value, placeholder, focus } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <input
      type={type}
      name={name}
      id={name}
      className="p-2 my-2 rounded-md border border-gray-300 w-full"
      defaultValue={value}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
}
