import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Nav>
      <Logo to="/home" onClick={() => setOpen(false)}>
        <i>{"<MyCoding/>"} </i>
        {/* tag lere özel < işaretlerini string gibi kullanmak istersek üstteki syntax la yazarız */}
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={open} onClick={() => setOpen(false)}>
        <MenuLink to="/about">About</MenuLink>

        <a href="https://github.com/Cakirfan" target="_blank" rel="noreferrer">Github</a>

        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
    <div style={{ height: "75px" }}></div>      
    </>

  );
};

export default Navbar;
