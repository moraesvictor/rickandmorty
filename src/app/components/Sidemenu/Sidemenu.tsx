import Link from "next/link";
import NavLinks from "./components/NavLink";

export const Sidemenu = () => {
  return (
    <aside className="border w-screen h-auto absolute bg-[#bfde42] py-3 px-20">
      <NavLinks />
    </aside>
  );
};
