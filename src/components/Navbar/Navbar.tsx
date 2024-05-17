import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuNavbar } from "./MenuNavbar";
import { Logo } from "../Logo/Logo";
import { NavList } from "./NavList";
import { NavIconList } from "./NavIconList";
import { Search } from "../Search/Search";

export default function Navbar({
  isMenu,
  setIsMenu,
  navRef,
}: {
  isMenu: boolean;
  setIsMenu: (value: React.SetStateAction<boolean>) => void;
  navRef: React.RefObject<HTMLElement>;
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width >= 768) {
      setIsMenu(false);
    }
  }, [width, setIsMenu]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleResize);
    };
  }, [width, setIsMenu]);

  return (
    <nav
      id="navBar"
      ref={navRef}
      className="flex fixed w-full justify-between items-center z-[99999] lg:px-12 lg:py-6 px-6 py-3 text-default"
    >
      <Logo />
      <NavList />
      <Search />
      <NavIconList />
      {!isMenu ? (
        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="md:hidden block"
        >
          <Menu />
        </button>
      ) : (
        <MenuNavbar setIsMenu={setIsMenu} />
      )}
    </nav>
  );
}
