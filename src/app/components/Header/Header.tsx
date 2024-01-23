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
    <header className={clsx("flex py-4 items-center gap-2", className)}>
      <div className="flex items-center">
        <Image src={Morty} alt="iconMorty" width="40" height="40" />
        <h2 className="font-bold text-3xl ml-2">{title}</h2>
      </div>
      {children}
    </header>
  );
};
