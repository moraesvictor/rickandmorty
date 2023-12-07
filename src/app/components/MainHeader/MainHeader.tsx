import Image from "next/image";
import Logo from "../../../assets/rick-and-morty-logo.png";
import Rick from "../../../assets/header-rick.png";
import Morty from "../../../assets/header-morty.png";

export const MainHeader = () => {
  return (
    <header>
      <div className="text-5xl font-extrabold text-gray-800 flex justify-between items-center h-[30vh] bg-white px-5">
        <Image src={Morty} alt="logo" width="120" height="185" />
        <Image src={Logo} alt="logo" width="539" height="185" />
        <Image src={Rick} alt="logo" width="165" height="185" />
      </div>
    </header>
  );
};
