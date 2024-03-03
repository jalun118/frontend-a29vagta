import { DOMAttributes, useContext } from "react";
import { SettupContext } from "../../lib/context/settup-context";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";

interface iButtonQuestion extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
}

export default function ButtonQuetion({ OnOpen, ...props }: iButtonQuestion) {
  const { GetContextSettup } = useContext(SettupContext);

  return (
    <ButtonLinkActive to="/question" {...props} className={`tooltip button-link text-white bg-blue-500 dark:bg-blue-600 justify-center items-center font-medium rounded-full text-sm p-1.5 outline-none shadow-xl shadow-gray-700/50 transition-all duration-300 delay-[250ms] ease-in-out bottom-[4.6rem] fixed ${OnOpen ? "right-[4.6rem] scale-1 visible hover:scale-[1.1] active:scale-[1.1]" : "right-[1.4rem] scale-0 invisible -z-40"} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
      {GetContextSettup.showTooltips && (
        <span className="tooltiptext left">Question</span>
      )}
    </ButtonLinkActive>
  );
}
