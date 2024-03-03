import { DOMAttributes, useContext } from "react";
import { SettupContext } from "../../lib/context/settup-context";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";

interface iButtonAbout extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
}

export default function ButtonAbout({ OnOpen, ...props }: iButtonAbout) {
  const { GetContextSettup } = useContext(SettupContext);

  return (
    <ButtonLinkActive to="/team" {...props} className={`tooltip button-link text-white bg-violet-500 dark:bg-violet-600 justify-center items-center font-medium rounded-full text-sm p-1.5 outline-none shadow-xl shadow-gray-700/50 transition-all duration-300 delay-200 transition-transform-0 ease-in-out fixed ${OnOpen ? "right-[4.6rem] bottom-[7.6rem] scale-1 z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "bottom-[4.6rem] right-6 scale-0 -z-40 invisible"} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
      {GetContextSettup.showTooltips && (
        <span className="tooltiptext left">Info</span>
      )}
    </ButtonLinkActive>
  );
}
