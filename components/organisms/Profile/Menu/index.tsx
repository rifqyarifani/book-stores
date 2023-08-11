import ProfilePicture from "@/components/atoms/Profile/Menu/ProfilePicture";
import MenuNav from "@/components/molecules/Profile/MenuNav";
import React from "react";

type Props = {
  isActiveIndex: number;
  setIsActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu(props: Props) {
  const { isActiveIndex, setIsActiveIndex, showMenu, setShowMenu } = props;

  const showMenuStyle = () => {
    if (showMenu) {
      return "translate-x-0";
    }
    return "-translate-x-full";
  };
  return (
    <div
      className={`${showMenuStyle()} w-full fixed lg:relative top-12 lg:top-0 left-0 bottom-0 right-0 px-4 sm:px-8 lg:px-0 pt-8 lg:pt-0 bg-white lg:pr-8 lg:w-1/4 lg:translate-x-0 duration-300`}
    >
      <div className="lg:sticky lg:top-20">
        <ProfilePicture w={64} h={64} classname="rounded-full" />
        <p className="text-center font-bold text-black py-2">User Satu</p>
        <MenuNav
          isActiveIndex={isActiveIndex}
          setIsActiveIndex={setIsActiveIndex}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </div>
  );
}
