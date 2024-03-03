import { MouseEvent, MouseEventHandler, useState } from "react";
import { metaViewPort } from "../../../lib/Lib";

const body = document.querySelector("body");

function StatisModal(isStatis: boolean) {
  if (isStatis) {
    metaViewPort("", true);
    if (body?.style.overflow !== undefined) {
      return body.style.overflow = "hidden";
    }
  }
  metaViewPort("");
  return body?.removeAttribute('style');
}

interface ModalImageProps {
  Image: string;
  close: MouseEventHandler;
  isModalShow: boolean;
}

export default function ModalImage({ Image, close, isModalShow }: ModalImageProps) {
  const [isShow, SetIsShow] = useState(false);

  if (isModalShow) {
    setTimeout(() => {
      SetIsShow(true);
    }, 200);
  }

  function CLoseModalCallback(e: MouseEvent) {
    if ((e as any).target.tagName === "IMG") {
      return null;
    }
    SetIsShow(false);
    return setTimeout(() => {
      StatisModal(false);
      return close(e);
    }, 200);
  }

  StatisModal(true);

  return (
    <div id="modal" tabIndex={-1} onClick={(e) => CLoseModalCallback(e)} aria-hidden="true" className={`fixed select-none justify-center items-center z-50 flex w-full p-4 overflow-x-hidden overflow-y-auto inset-0 md:h-full bg-black bg-opacity-80 transition duration-300 ease-in-out ${isShow ? "" : "opacity-0"}`}>
      <div className={`relative max-w-md lg:max-w-lg transition duration-300 ease-in-out ${isShow ? "" : "translate-y-5"}`}>
        <button type="button" onClick={(e) => CLoseModalCallback(e)} className="absolute z-50 top-2 transition-all duration-200 ease-in-out right-2 text-white bg-red-500 bg-transparent hover:bg-red-500 active:bg-red-400 rounded-lg text-sm p-1 ml-auto inline-flex items-center">
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="block rounded-md overflow-hidden max-h-[28rem] lg:max-h-[35rem]">
          <img className="w-full h-full lg:scale-[1.1]" src={Image} alt="" onContextMenu={(e) => e.preventDefault()} />
        </div>
      </div>
    </div>
  );
}
