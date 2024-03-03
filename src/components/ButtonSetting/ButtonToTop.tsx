import { DOMAttributes, MouseEvent, useContext, useEffect, useState } from "react";
import { SettupContext } from "../../lib/context/settup-context";

interface iButtonToTop extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
  callback: Function | ((event: MouseEvent) => void);
  callbackOffset: Function | ((event: boolean) => void);
}

export default function ButtonToTop({ OnOpen, callback, callbackOffset = () => { }, ...props }: iButtonToTop) {
  const [isOffSet, SetIsOffSet] = useState(false);
  const { GetContextSettup } = useContext(SettupContext);

  const handlerToTop = (e: MouseEvent) => {
    if (callback) {
      callback(e);
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      callbackOffset(true);
      SetIsOffSet(true);
      return;
    }
    callbackOffset(false);
    return SetIsOffSet(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button onClick={(e) => handlerToTop(e)} {...props} className={`tooltip text-white bg-lime-500 dark:bg-lime-600 flex justify-center items-center font-medium rounded-full text-sm shadow-xl shadow-gray-700/50 transition-all duration-300 delay-100 ease-in-out p-1.5 fixed ${OnOpen && isOffSet ? "bottom-[11rem] z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "bottom-[4.8rem] scale-0 -z-40 invisible"} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
      {GetContextSettup.showTooltips && (
        <span className="tooltiptext top">To top</span>
      )}
    </button>
  );
}
