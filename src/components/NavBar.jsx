import {
  Heart,
  List,
  User,
  X,
} from "@phosphor-icons/react";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { title: "Home", path: "/", icon: "" },
    {
      title: "Favoritos",
      path: "/favorite",
      icon: <Heart size={28} weight="bold" />,
    },
    // {
    //   title: "Carrinho",
    //   path: "/car",
    //   icon: <ShoppingCartSimple size={28} weight="bold" />,
    // },
    {
      title: "Login",
      path: "/login",
      icon: <User size={28} weight="bold" />,
    },
  ];
  return (
    <header className="flex justify-around items-center h-[90px] shadow-lg relative">
      <img className="w-[140px] h-[40px]" src={logo} alt="logo" />

      <nav
        className={` sm:flex sm:flex-row flex-col gap-x-4 
      ${
        isOpen
          ? "flex absolute top-[90px] w-full left-0 bg-white pt-8 gap-y-8 items-center"
          : "hidden"
      } 
      `}
      >
        {navLinks.map((link, i) => (
          <a
            key={i}
            className="hover:text-primary duration-300 flex items-center gap-x-2"
            href={link.path}
          >
            {isOpen ? link.title : link.icon}
          </a>
        ))}

        <CartWidget />
S      </nav>
      {isOpen ? (
        <X
          className="sm:hidden hover:text-primary duration-300 cursor-pointer"
          size={28}
          weight="bold"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <List
          className="sm:hidden hover:text-primary duration-300 cursor-pointer"
          size={28}
          weight="bold"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </header>
  );
};

export default NavBar;
