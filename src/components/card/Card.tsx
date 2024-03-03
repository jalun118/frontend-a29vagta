import { DetailedHTMLProps, HTMLAttributes, MouseEvent, useState } from "react";
import { LazyImage, LocaleFormatIndonesia, SatuanWaktu, timeSince } from "../../lib/Lib";
import ModalCard from "./ModalCard";
import ModalImageCard from "./ModalImageCard";

interface iCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  thumbnail: string;
  title: string;
  describe: string;
  date: string | number | Date;
  linkDownload: string;
  linkRepo: string;
}

function Card({ thumbnail, title, describe, date, linkDownload, linkRepo, ...props }: iCardProps) {
  const [GetSubString, SetSubString] = useState(false);
  const [IsShowModal, SetShowModal] = useState(false);
  const [IsShowModalImage, SetShowModalImage] = useState(false);

  const LENGTH_DES = describe.length >= 24;

  function ShareImage() {
    if (navigator.share) return navigator.share({ title: title, text: title, url: `${window.location.origin + "/p/" + props.id}` });
    return SetShowModal(true);
  }

  function centexHnadler(e: MouseEvent) {
    e.preventDefault();
    SetShowModalImage(true);
  }

  const LINK_SHARE = window.location.origin + "/p/" + props.id;

  return (
    <>
      <div {...props}>
        <div onContextMenu={(e) => centexHnadler(e)} className="md:max-w-sm flex flex-col font-sans relative md:my-4 mt-2 mb-3 bg-white bg-opacity-40 border border-gray-200 md:rounded-lg md:bg-transparent md:border-transparent md:dark:bg-transparent md:dark:border-transparent md:rounded-t-lg dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700">
          <LazyImage className="md:rounded-lg">
            <img className="md:rounded-lg" src={thumbnail} alt={title + " " + describe} />
          </LazyImage>
          <div className="md:px-5 md:pb-5 md:pt-3 p-5 pt-3 flex-auto">
            <div className="flex flex-row">
              <a href={linkRepo} target="_blank" rel="noreferrer" className="mr-2 text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                </svg>
              </a>
              <a href={linkDownload} target="_blank" rel="noreferrer" className="mx-1 text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                </svg>
              </a>
              <button onClick={() => ShareImage()} className="text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </button>
            </div>
            <h5 className="mt-2 mb-1 sm:text-lg md:text-xl font-[500] tracking-normal text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal whitespace-pre-line text-sm sm:text-base text-gray-700 dark:text-gray-100">
              <span className="inline-block font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">{timeSince(date)}</span>
              {" "}
              {GetSubString ? describe : LENGTH_DES ? describe.substring(0, 9) + "...." : describe}
              {LENGTH_DES ? (
                <button onClick={() => SetSubString(!GetSubString)} className={`${GetSubString ? "block" : "ml-1 my-1"} opacity-60 font-[400] select-none text-gray-900 dark:text-gray-200`}>
                  {!GetSubString ? "selengkapnya" : "lebih sedikit"}
                </button>
              ) : null}
              <span className="block text-sm text-black font-sans select-none dark:text-gray-200">{LocaleFormatIndonesia(date, true, SatuanWaktu.bulan, 1)?.TanggalNotHari}</span>
            </p>
          </div>
        </div>
      </div>

      {IsShowModal && (
        <ModalCard callBack={() => SetShowModal(false)} isShowModal={IsShowModal} link={LINK_SHARE} />
      )}

      {IsShowModalImage && (
        <ModalImageCard Image={thumbnail} close={() => SetShowModalImage(false)} isModalShow={IsShowModalImage} />
      )}
    </>
  );
}

export default Card;

