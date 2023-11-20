"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface LinkProps {
  icon: React.ReactNode;
  link: string;
}

const Links = ({ link, icon }: LinkProps) => {
  const route = useRouter();

  return (
    <>
      <Link className="text-3xl " href={link}>
        {icon}
      </Link>
    </>
  );
};

export default Links;
