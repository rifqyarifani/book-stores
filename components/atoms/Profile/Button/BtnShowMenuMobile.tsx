import React from "react";

type Props = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BtnShowMenuMobile(props: Props) {
  const { showMenu, setShowMenu } = props;

  return (
    <div className="container mx-auto flex px-4 md:px-8 lg:px-8">
      <button
        className="text-sm p-2 bg-regular text-white rounded-r-full lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>
    </div>
  );
}
