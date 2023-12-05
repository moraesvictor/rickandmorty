import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";
import Morty from "../../../assets/morty.png";

type HeaderProps = {
  title: string;
  className?: string;
  children?: ReactNode;
};

export const Header = ({ title, className, children }: HeaderProps) => {
  return (
    <header className={clsx("flex py-3 items-center gap-2", className)}>
      <Image src={Morty} alt="iconMorty" width="20" height="30" />
      <h2 className="font-bold text-3xl">{title}</h2>
      {children}
    </header>
  );
};
