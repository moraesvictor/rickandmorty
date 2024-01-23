import Image from "next/image";
import banner from '../../../../public/rick_banner.jpg'

export const MainHeader = () => {
  return (
    <header className="mt-[70px]">
      <Image alt="banner-ricky-morty" src={banner} />
    </header>
  );
};
