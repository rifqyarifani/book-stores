import Image from "next/image";
import React from "react";

type Props = {
  w: number;
  h: number;
  classname?: string;
  src: string | undefined;
};

export default function ProfilePicture(props: Props) {
  const { w, h, classname, src } = props;

  return (
    <div className="flex justify-center">
      <Image
        src={src ? src : "/images/avatar.png"}
        width={w}
        height={h}
        alt="Profile Picture"
        className={classname}
        priority={true}
      />
    </div>
  );
}
