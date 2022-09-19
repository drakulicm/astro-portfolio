import NavItem from "./NavItem";
import hamburger from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  return (
    <header className="flex flex-row justify-between items-center pt-3 px-3 lg:px-0">
      <span className="font-bold text-4xl">Marko</span>
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-16">
          <NavItem to="/" text="Home" />
          <NavItem to="/#projects" text="Projects" />
          <NavItem to="/#about" text="About" />
          <NavItem to="/#socials" text="Socials" />
        </ul>
      </nav>

      {!isMobileMenuOpen && (
        <img
          src={hamburger}
          className="block lg:hidden cursor-pointer"
          alt="menu"
          onClick={() => setIsMobileMenuOpen(true)}
        />
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 ">
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <nav className="text-white w-3/4 h-3/4 flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-8 text-center">
                <NavItem to="/" text="Home" />
                <NavItem to="/#projects" text="Projects" />
                <NavItem to="/#about" text="About" />
                <NavItem to="/#socials" text="Socials" />
              </ul>
            </nav>
            <img
              src={closeIcon}
              className="absolute top-4 right-3 cursor-pointer h-6 w-6"
              alt="menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
