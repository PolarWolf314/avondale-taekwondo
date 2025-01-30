import React from "react";

import Logo from "@/components/layout/header/Logo";
import MenuSheet from "./header/MenuSheet";
import ExpandedLinks from "./header/ExpandedLinks";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <nav className="flex flex-row justify-between items-center py-4 px-6">
        <Logo />
        <div className="block sm:hidden">
          <MenuSheet />
        </div>
        <div className="hidden sm:block">
          <ExpandedLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
