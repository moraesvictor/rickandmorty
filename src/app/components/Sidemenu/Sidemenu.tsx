import Link from "next/link";
import NavLinks from "./components/NavLink";

export const Sidemenu = () => {
  return (
    <aside className="border border-gray-700 w-screen h-auto absolute bg-gray-700 p-3">
      <NavLinks />
    </aside>
  );
};
