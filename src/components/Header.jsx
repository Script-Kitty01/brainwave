import { useLocation } from "react-router-dom";
import Button from "./Button";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setopenNavigation(false);
  };
  return (
    <div
      className={`fixed left-0 w-full top-0 z-50 bg-n-8/90  border-b  lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            className="hover:animate-pulse"
            src={brainwave}
            alt="Brainwave Logo"
            width={190}
            height={40}
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent top-[5rem]`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                onClick={handleClick}
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          new account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign-in
        </Button>
        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
