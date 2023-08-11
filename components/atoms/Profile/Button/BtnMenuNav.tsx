import React from "react";

type Props = {
  isActiveIndex: number;
  setIsActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  children: string;
  index: number;
};

export default function BtnMenuNav(props: Props) {
  const {
    children,
    index,
    setIsActiveIndex,
    isActiveIndex,
    showMenu,
    setShowMenu,
  } = props;

  const handleIsActive = () => {
    setIsActiveIndex(index);
    setShowMenu(!showMenu);
  };

  return (
    <button onClick={handleIsActive}>
      <div
        className={`${
          isActiveIndex === index && "text-secondary"
        } text-left hover:text-secondary`}
      >
        {children}
      </div>
    </button>
  );
}
