import React from "react";

import Logo from "@/components/layout/header/Logo";
import MenuSheet from "./header/MenuSheet";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <nav className="flex flex-row justify-between items-center py-4 px-6">
        <Logo />
        <MenuSheet />
      </nav>
    </header>
  );
};

export default Header;
