import React from "react";

import Logo from "@/components/layout/header/Logo";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <nav>
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
