import { HTMLMotionProps, motion } from "framer-motion";
import { MouseEvent, useState } from "react";

interface iAlertProps extends HTMLMotionProps<"div"> {
  text: string;
  BoldText: string;
  callBack?: Function | ((e: MouseEvent) => void);
}

export default function AlertInfo({ text, BoldText, callBack, ...props }: iAlertProps) {
  const [isHidden, SetHidden] = useState(false);
  const [isClickHidden, SetClickHidden] = useState(false);

  function CloseHandler(e: MouseEvent) {
    SetClickHidden(true);

    setTimeout(() => {
      if (callBack) {
        return callBack(e);
      }

      return SetHidden(true);
    }, 500);
  }

  return (
    <>
      {!isHidden ?
        <motion.div className="container lg:max-w-screen-sm" {...props} >
          <div className={`flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 transition duration-500 ease-in-out ${isClickHidden ? "opacity-0 translate-y-4" : ""}`} role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 inline w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <div className="text-base">
              <span className="font-medium">{BoldText}</span>{" "}{text}
            </div>
            <button onClick={(e) => CloseHandler(e)} className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" aria-label="Close">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div> : null}
    </>
  );
}