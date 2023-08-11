import React from "react";

type Props = {
  name: string;
};

export default function FormSelectGender(props: Props) {
  const { name } = props;

  return (
    <select
      name={name}
      id={name}
      className="p-2 my-2 rounded-md border border-gray-300 w-full"
    >
      <option value="male">Laki-laki</option>
      <option value="female">Perempuan</option>
    </select>
  );
}
