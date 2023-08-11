import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  isShow: () => void;
};

export default function BtnChangeData(props: Props) {
  const { isShow } = props;

  return (
    <button
      type="button"
      onClick={isShow}
      className="font-semibold hover:text-secondary"
    >
      Ubah
    </button>
  );
}
