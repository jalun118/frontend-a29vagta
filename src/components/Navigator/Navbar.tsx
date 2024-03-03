import { memo, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brand, BrandTitle2 } from "../../lib/Lib";
import { SettupContext } from "../../lib/context/settup-context";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";
import "./nav.css";

const html = document.querySelector("html");

const ArrayLink = [
  {
    to: "/",
    title: "Home",
    NewClassName: null,
  },
  {
    to: "/question",
    title: "Question",
    NewClassName: null,
  },
  {
    to: "/memory",
    title: "Album",
    NewClassName: null,
  },
  {
    to: "/upload",
    title: "Form",
    NewClassName: null,
  }
];

const StyleLink = "navlink mx-2 font-medium rounded-lg transition-all duration-300 flex py-2 px-4 text-base text-back my-1 lg:my-0 hover:bg-teal-600 active:bg-teal-700 hover:text-white";

function Navbar() {
  const [Scroll, setScroll] = useState(false);
  const { GetContextSettup, SetContextSettup } = useContext(SettupContext);
  const { pathname } = useLocation();
  const MachingIndex = pathname === "/";

  useEffect(() => {
    if (GetContextSettup.themes === "dark") {
      html?.classList.add("dark");
    }
  }, []);

  function ToggleColor() {
    const newTheme = GetContextSettup.themes === "light" ? "dark" : "light";
    SetContextSettup({
      ...GetContextSettup,
      themes: newTheme
    });
    if (newTheme === "light") html?.classList.remove("dark");
    if (newTheme === "dark") html?.classList.add("dark");
    localStorage.setItem('setting', JSON.stringify({
      ...GetContextSettup,
      themes: newTheme
    }));
  }

  const onScroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) return setScroll(true);
    return setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkMap = ArrayLink.map((link, idx) => {
    return (
      <ButtonLinkActive
        key={idx}
        to={link.to}
        className={
          link.NewClassName === null
            ? StyleLink
            : StyleLink + " " + link.NewClassName
        }
      >
        {link.title}
      </ButtonLinkActive>
    );
  });

  return (
    <header id="header-nav" style={{ top: MachingIndex ? 0 : "" }} className={`${MachingIndex ? "index-home " : ""}z-40 header-nav ${Scroll ? "scroll shadow-xl shadow-gray-800/50 dark:shadow-gray-700/60 md:shadow-gray-800/25 " : ""}${MachingIndex ? "absolute md:fixed" : "sticky"} select-none top-0 flex w-full items-center bg-transparent transition-all duration-200 ease-in-out`}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link
              to="/"
              className="flex align-middle items-center py-1.5 sm:text-[1.24rem] font-bold text-primary row-auto"
            >
              <Brand
                className="mr-1"
                alt="my logo"
                style={{ aspectRatio: "1/1", width: "2rem" }}
              />
              <BrandTitle2 className="text-blue-500" />
            </Link>
          </div>
          <div className="lg:flex hidden items-center px-4">
            <nav
              id="nav-menu"
              className={"absolute right-4 top-full nav-menu md:opacity-100 md:visible transition-all duration-300 ease-in-out w-full max-w-[55%] rounded-lg bg-white bg-opacity-60 py-2 dark:shadow-slate-500 md:static md:block md:max-w-full md:rounded-none md:bg-transparent md:shadow-none md:dark:bg-transparent"}
            >
              <ul className="block md:flex">
                {LinkMap}
                <button onClick={() => ToggleColor()} className="navlink font-medium rounded-full transition-all duration-300 flex p-2 text-base text-back my-1 lg:my-0 hover:bg-teal-600 active:bg-teal-700 hover:text-white">
                  {GetContextSettup.themes === "light" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500">
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  )}
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);