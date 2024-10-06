import { useState } from "react";
import { LocaleFormatIndonesia, timeSince } from "../../lib/Lib";
import ModalVideo from "./ModalVideo";

export default function ReadyVideo({ Data }: { Data: any; }) {
  const [GetSubString, SetSubString] = useState(false);
  const [IsShowModal, SetShowModal] = useState(false);

  function ShareButton() {
    if (navigator.share) return navigator.share({ url: window.location.href, title: Data.judul, text: Data.judul });
    return SetShowModal(true);
  }

  if (Data) {
    return (
      <>
        <div className="max-w-[100%] lg:max-w-[70%] lg:min-w-[50%] md:mx-5 md:mr-8 md:mb-4 mb-3 ">
          <video className="bg-cover w-[100%] bg-gray-400 dark:bg-gray-700" poster={"https://backend-a29vagta.vercel.app/proxy?img=" + encodeURIComponent("https://drive.google.com/uc?export=download&id=" + Data.id_thumb)} controls controlsList="nodownload">
            <source src={"https://backend-a29vagta.vercel.app/proxy?img=" + encodeURIComponent(Data.link_video)}></source>
          </video>
          <div className="md:pb-5 md:pt-2 px-4 pt-2 pb-4 md:px-0 bg-white dark:bg-opacity-20 md:bg-transparent md:dark:bg-transparent bg-opacity-40 dark:bg-gray-700">
            <h5 className="font-sans mb-1 text-lg sm:text-xl md:text-2xl tracking-normal font-semibold text-gray-900 dark:text-white">
              {Data.judul}
            </h5>
            <div className="font-roboto mb-4 font-normal text-base text-gray-700 dark:text-gray-300">
              {timeSince(Data.createdAt)}
              <div className="inline-flex relative flex-row float-right mr-2">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <a href={Data.link_original_video} target="_blank" className="px-3 py-1 text-sm font-medium transition ease-in-out duration-200 text-gray-900 bg-white dark:bg-opacity-50 border-[2px] border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700  dark:border-gray-600 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-600 dark:hover:bg-opacity-50 dark:focus:ring-blue-500 dark:focus:text-white" rel="noreferrer">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                    </svg>
                  </a>
                  <a href={Data.link_download_video} target="_blank" className="px-3 py-1 text-sm font-medium transition ease-in-out duration-200 text-gray-900 bg-white dark:bg-opacity-50 border-t-[2px] border-b-[2px] border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700  dark:border-gray-600 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-600 dark:hover:bg-opacity-50 dark:focus:ring-blue-500 dark:focus:text-white" rel="noreferrer">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                    </svg>
                  </a>
                  <button onClick={() => ShareButton()} type="button" className="px-3 py-1 text-sm font-medium transition ease-in-out duration-200 text-gray-900 bg-white dark:bg-opacity-50 border-[2px] border-gray-300 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700  dark:border-gray-600 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-600 dark:hover:bg-opacity-50 dark:focus:ring-blue-500 dark:focus:text-white">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-gray-400/90 dark:border-gray-600 my-1" />
            <p className="font-sans tracking-wider whitespace-pre-line dark:text-gray-100 pt-2 py-4">
              <span className="block tracking-normal capitalize my-1 mb-2 font-bold dark:text-gray-50">{LocaleFormatIndonesia(Data.createdAt)?.Tanggal}</span>
              {Data.deskripsi ?
                <>
                  {!GetSubString ? (Data.deskripsi?.length >= 30) ? Data.deskripsi?.substring(0, 18) + "..." : Data.deskripsi : Data.deskripsi}
                  {(Data.deskripsi.length >= 30) && (
                    <button onClick={() => SetSubString(!GetSubString)} className={`${GetSubString ? "block" : "ml-1"} select-none transition ease-in-out duration-200 px-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-400 opacity-60 font-[500] text-gray-900 dark:text-gray-200`}>
                      {!GetSubString ? "selengkapnya" : "lebih sedikit"}
                    </button>
                  )}
                </> : <>
                  <span className="flex justify-center items-center h-24 lg:h-56">
                    <span>Tidak ada deskripsi ¯\_(ツ)_/¯</span>
                  </span>
                </>
              }
            </p>
          </div>
          <div className="w-[100%] lg:hidden h-1 bg-gray-200 dark:bg-gray-500 opacity-75"></div>
        </div>
        {IsShowModal && <ModalVideo callBack={() => SetShowModal(false)} isShowModal={IsShowModal} link={window.location.href} />}
      </>
    );
  } else {
    return (
      <div>await.....</div>
    );
  }
}
