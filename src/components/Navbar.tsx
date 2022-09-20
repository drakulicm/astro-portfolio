import NavItem from "./NavItem";
import hamburger from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleCloseMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 bg-[#121212] flex flex-row justify-between items-center py-3 px-3 lg:px-0">
      <a href="/" className="font-bold text-4xl">
        Marko
      </a>
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

      <div
        className={`fixed inset-0 translate-x-full ${
          isMobileMenuOpen && "translate-x-0"
        } transition-transform duration-200`}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50 "></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <nav className="text-white w-3/4 h-3/4 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 text-center">
              <NavItem to="/" text="Home" onClick={handleCloseMobileNav} />
              <NavItem
                to="/#projects"
                text="Projects"
                onClick={handleCloseMobileNav}
              />
              <NavItem
                to="/#about"
                text="About"
                onClick={handleCloseMobileNav}
              />
              <NavItem
                to="/#socials"
                text="Socials"
                onClick={handleCloseMobileNav}
              />
            </ul>
          </nav>
          <img
            src={closeIcon}
            className="absolute top-4 right-3 cursor-pointer h-6 w-6"
            alt="meni close"
            onClick={() => handleCloseMobileNav()}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
