import { DOMAttributes, MouseEvent, MouseEventHandler, useContext, useEffect } from "react";
import { SettupContext } from "../../lib/context/settup-context";

const html = document.querySelector("html");

interface iButtonTriggerOpen extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
  onClick?: MouseEventHandler;
}

export default function ThemesButton({ OnOpen, onClick, ...props }: iButtonTriggerOpen) {
  const { GetContextSettup, SetContextSettup } = useContext(SettupContext);

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

  const onClickHandler = (e: MouseEvent) => {
    e.preventDefault();
    ToggleColor();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={(e) => onClickHandler(e)} {...props} className={`tooltip text-white bg-emerald-500 dark:bg-emerald-600 justify-center items-center font-medium rounded-full text-sm p-1.5 outline-none shadow-xl shadow-gray-700/50 transition-all duration-300 delay-[50ms] ease-in-out fixed ${OnOpen ? "bottom-[7.8rem] scale-1 z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "bottom-[5.5rem] scale-0 -z-40 invisible"} `}>
      {GetContextSettup.themes === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      )}
      {GetContextSettup.showTooltips && (
        <span className="tooltiptext bottom">Theme</span>
      )}
    </button>
  );
}