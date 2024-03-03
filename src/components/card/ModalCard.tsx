import { MouseEvent, useRef, useState } from "react";

const body = document.querySelector("body");

function StatisModal(isStatis: boolean) {
  if (isStatis) {
    if (body?.style?.overflow !== undefined) {
      return body.style.overflow = "hidden";
    }
  }
  return body?.removeAttribute('style');
}

interface iModalProps {
  callBack: Function | ((event: MouseEvent) => void);
  link: string;
  isShowModal?: boolean;
}

export default function ModalCard({ callBack, link, isShowModal }: iModalProps) {
  const [SUCCES_SELECT, SET_SUCCES_SELECT] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const SELECTOR = useRef<any>(null);

  function SendEmail() {
    window.open("mailto:");
  }

  if (isShowModal) {
    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }

  function CopyToClipbord() {
    SELECTOR?.current.select();
    SELECTOR?.current.setSelectionRange(0, 99999);
    if (navigator.clipboard.writeText) {
      navigator.clipboard.writeText(SELECTOR.current.value);
      SET_SUCCES_SELECT(true);
      const HIDDEN_COMENT = setTimeout(() => {
        SET_SUCCES_SELECT(false);
      }, 2000);
      return () => clearTimeout(HIDDEN_COMENT);
    }

    return alert("browser not allow clipboard");
  }

  function handlerClose(e: MouseEvent) {
    setIsShow(false);
    setTimeout(() => {
      if (callBack) {
        callBack(e);
      }
      return StatisModal(false);
    }, 200);
  }

  StatisModal(true);

  return (
    <>
      <div id="modal" tabIndex={-1} aria-hidden="true" className={`fixed justify-center items-center z-50 flex w-full p-4 overflow-x-hidden overflow-y-auto inset-0 md:h-full transition duration-200 ease-in-out bg-black ${isShow ? "bg-opacity-60" : "bg-opacity-0 opacity-0"}`}>
        <div className="relative w-full max-w-md lg:max-w-lg h-auto">
          <div className={`relative bg-white rounded-lg shadow lg:scale-[1.1] transition duration-300 ease-in-out dark:bg-gray-700 ${isShow ? "" : "translate-y-4"}`}>
            <button onClick={(e) => handlerClose(e)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crypto-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Share
              </h3>
            </div>
            <div className="p-6 pt-3">
              <div className="my-4 mt-1">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <input type="search" ref={SELECTOR} id="default-search" className="block w-full p-3 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linknya coy" defaultValue={link} />
                  <button onClick={() => CopyToClipbord()} className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy</button>
                </div>
                <span className={`${SUCCES_SELECT ? "block" : "hidden"}`}>Link berhasil di copy</span>
              </div>

              <ul className="my-3 mt-1 space-x-3 flex flex-row overflow-auto">
                <li>
                  <a href={"https://api.whatsapp.com/send/?text=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="bg-[#25D366] p-3 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <path d="M6.579 8.121c.209-.663.778-1.457 1.19-1.66.183-.09.319-.11.763-.11.522 0 .548.005.684.14.088.095.328.606.673 1.432.292.71.533 1.315.533 1.347 0 .146-.293.61-.627 1.002-.23.267-.365.47-.365.543 0 .068.167.381.376.69.506.757 1.44 1.696 2.167 2.177.568.376 1.582.867 1.785.867.152 0 .429-.272.992-.982.23-.287.434-.495.512-.511.068-.021.235.005.37.057.392.152 2.371 1.117 2.476 1.211.203.188.037 1.264-.267 1.702-.464.68-1.79 1.259-2.663 1.17-.636-.068-2.14-.564-3.117-1.029-1.253-.6-2.574-1.697-3.644-3.038-.611-.763-1.227-1.692-1.493-2.246-.36-.751-.491-1.331-.455-2 .016-.287.068-.631.11-.762Z" fill="currentColor" />
                        <path clipRule="evenodd" d="M.606 9.5C1.582 4.491 5.576.76 10.709.06c.705-.1 2.684-.068 3.368.046.715.126 1.66.371 2.24.59 3.832 1.426 6.663 4.72 7.466 8.683.35 1.729.272 3.755-.203 5.457-1.133 4.03-4.423 7.205-8.511 8.218-2.663.658-5.462.37-7.983-.81l-.617-.292-3.226 1.029C1.473 23.545.01 23.994 0 23.983c-.01-.01.45-1.415 1.029-3.112l1.05-3.096-.424-.84C.48 14.569.12 12.01.605 9.498Zm21.172-.408c-1.028-3.76-4.297-6.626-8.145-7.148-2.099-.282-4.078.037-5.9.956-4.417 2.234-6.522 7.341-4.93 11.957.204.59.752 1.702 1.092 2.213l.271.408-.605 1.775a69.688 69.688 0 0 0-.606 1.817c0 .026.84-.224 1.864-.548a99.767 99.767 0 0 1 1.9-.596c.022 0 .225.11.45.24 2.428 1.447 5.456 1.76 8.187.852a9.927 9.927 0 0 0 6.48-6.945 9.998 9.998 0 0 0-.058-4.98Z" fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href={"https://www.facebook.com/dialog/share?href=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="bg-[#3B5998] p-3 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <path d="m17.543 13.398.661-4.31h-4.136V6.29c0-1.18.578-2.329 2.43-2.329h1.88V.291S16.673 0 15.042 0c-3.407 0-5.633 2.064-5.633 5.802v3.285H5.622v4.311h3.786v10.42a15.015 15.015 0 0 0 4.66 0v-10.42h3.475Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href={"https://twitter.com/intent/tweet?url=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="bg-[#1DA1F2] p-3 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <path d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Twitter</span>
                  </a>
                </li>
                <li>
                  <button onClick={() => SendEmail()} className="flex items-center flex-col text-base font-bold rounded-lg">
                    <span className="bg-[#888888] p-3 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Email</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
