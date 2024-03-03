import { DOMAttributes, useContext } from "react";
import { SettupContext } from "../../lib/context/settup-context";

interface iButtonTriggerOpen extends DOMAttributes<HTMLButtonElement> {
  isOpen: boolean;
  callback: Function | ((event: boolean) => void);
}

export default function ButtonTrigerOpen({ isOpen, callback, ...props }: iButtonTriggerOpen) {
  const { GetContextSettup } = useContext(SettupContext);

  return (
    <button onClick={() => callback(!isOpen)} {...props} className="tooltip text-white bg-cyan-500 dark:bg-cyan-600 aspect-square hover:scale-[1.1] active:scale-[1.1] transition-all duration-200 ease-in-out font-medium rounded-full text-sm p-1.5 outline-none shadow-xl shadow-gray-700/50">
      <div className="flex flex-col justify-between">
        <svg viewBox="0 0 450 257" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-2 mb-1 transition-all duration-300 ease-[cubic-bezier(.84,-0.03,.33,1)] ${isOpen ? "translate-y-[0.21rem] rotate-180" : "translate-y-0"} `}>
          <path fill="currentColor" d="M202.4 9.4C214.9 -3.1 235.2 -3.1 247.7 9.4L439.7 201.4C452.2 213.9 452.2 234.2 439.7 246.7C427.2 259.2 406.9 259.2 394.4 246.7L225 77.3L55.6 246.6C43.1 259.1 22.8 259.1 10.3 246.6C-2.20001 234.1 -2.20001 213.8 10.3 201.3L202.3 9.3L202.4 9.4Z" />
        </svg>

        <svg viewBox="0 0 450 257" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-2 transition-all duration-300 ease-[cubic-bezier(.84,-0.03,.33,1)] ${isOpen ? "-translate-y-[0.21rem] rotate-180" : "translate-y-0"} `}>
          <path fill="currentColor" d="M202.4 247.6C214.9 260.1 235.2 260.1 247.7 247.6L439.7 55.6C452.2 43.1 452.2 22.8 439.7 10.3C427.2 -2.2 406.9 -2.2 394.4 10.3L225 179.7L55.6 10.4C43.1 -2.10001 22.8 -2.10001 10.3 10.4C-2.20001 22.9 -2.20001 43.2 10.3 55.7L202.3 247.7L202.4 247.6Z" />
        </svg>
      </div>
      <span className="sr-only">Menu</span>
      {GetContextSettup.showTooltips && !isOpen && (
        <span className="tooltiptext top">Menu</span>
      )}
    </button>
  );
}
