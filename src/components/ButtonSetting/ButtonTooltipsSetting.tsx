import { DOMAttributes, useContext } from "react";
import { SettupContext } from "../../lib/context/settup-context";

interface iBUttonCus extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
  IsOffSet: boolean;
}

export default function ButtonTooltipsSetting({ OnOpen, IsOffSet, ...props }: iBUttonCus) {
  const { GetContextSettup, SetContextSettup } = useContext(SettupContext);

  function ToggleTooltips() {
    const newToolTipsState = GetContextSettup.showTooltips ? false : true;
    SetContextSettup({
      ...GetContextSettup,
      showTooltips: newToolTipsState
    });
    localStorage.setItem('setting', JSON.stringify({
      ...GetContextSettup,
      showTooltips: newToolTipsState
    }));
  }

  return (
    <button onClick={() => ToggleTooltips()} {...props} className={`tooltip text-white justify-center items-center font-medium rounded-full text-sm p-1.5 outline-none shadow-xl shadow-gray-700/50 transition-all duration-300 delay-150 ease-in-out fixed ${OnOpen ? IsOffSet ? "bg-fuchsia-500 dark:bg-fuchsia-600 bottom-[10.9rem] right-[4.6rem] scale-1 z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "bg-lime-500 dark:bg-lime-600 bottom-[11rem] right-6 scale-1 z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "bg-white bottom-[4.8rem] right-6 scale-0 -z-40 invisible"} `}>
      {GetContextSettup.showTooltips ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ) : (
        <svg stroke="currentColor" className="w-7 h-7 transition-all duration-300 delay-150 ease-in-out text-black" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.75 8.25H16.25M7.25 11.25H7.73291M13.25 11.25H11.0572M3.14991 4.21842C3.58014 3.85277 4.11093 3.60068 4.707 3.513C7.006 3.175 9.358 3 11.75 3C14.107 2.99926 16.461 3.17072 18.793 3.513C20.377 3.746 21.5 5.139 21.5 6.741V12.759C21.5 14.361 20.377 15.754 18.793 15.987C17.9481 16.1113 17.1002 16.213 16.25 16.2922M2.05186 6.14931C2.01772 6.34201 2 6.53988 2 6.741V12.759V12.76C2 14.36 3.123 15.754 4.707 15.987C5.836 16.153 6.977 16.28 8.13 16.366C8.48 16.392 8.8 16.576 8.995 16.867L11.75 21L14.0831 17.5M1.3 2.5L21.3 21" />
        </svg>
      )}
      {GetContextSettup.showTooltips && (
        <span className="tooltiptext bottom">Tooltips</span>
      )}
    </button>
  );
}