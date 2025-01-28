import React from "react";

import Logo from "@/components/layout/header/Logo";
import MenuSheet from "./header/MenuSheet";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <nav>
        <Logo />
        <MenuSheet />
      </nav>
    </header>
  );
};

export default Header;
