import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/" texto="Home" />
        </li>
        <li>
          <Link href="/produtos" texto="Produto" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
