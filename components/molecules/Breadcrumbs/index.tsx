import Link from "next/link";
import React from "react";

type Props = {
  children: string | string[];
};

export default function Breadcrumbs(props: Props) {
  const { children } = props;
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-8 pt-20 lg:pt-18 pb-2 text-sm">
      <Link href="/">Home</Link>
      <span className="mx-1">/</span>
      <span>{children}</span>
    </div>
  );
}
