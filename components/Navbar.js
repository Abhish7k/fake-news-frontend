// "use client";

import Image from "next/image";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  return (
    <nav className="mt-5 flex justify-between items-center w-full mb-10 pt-4">
      <a href="/" className="flex items-center">
        <Image src="/logo.svg" alt="" height={40} width={40} className="" />
        <h1 className="pl-2 font-bold text-2xl">FakeNewsFinder</h1>
      </a>

      <AuthButtons />
    </nav>
  );
};

export default Navbar;
