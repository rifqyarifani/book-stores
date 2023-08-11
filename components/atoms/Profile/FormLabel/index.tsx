import React from "react";

type Props = {
  label: string;
  name: string;
};

export default function FormLabel(props: Props) {
  const { label, name } = props;

  return (
    <label htmlFor={name} className="font-semibold text-black">
      {label}
    </label>
  );
}
