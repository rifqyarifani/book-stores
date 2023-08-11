import React from "react";

type Props = {
  children: string;
  isActive: boolean;
  onClick: () => void;
};

export default function SubMenuNav(props: Props) {
  const { children, isActive, onClick } = props;

  return (
    <div
      className={`${
        isActive && `text-secondary border-secondary`
      } border-b border-gray-300 flex justify-center hover:text-secondary hover:border-secondary`}
    >
      <button className="w-full font-semibold" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
