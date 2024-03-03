import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalCard from "../../components/card/ModalCard";
import { FetchRequest, LazyImage, LoadingSpiner, LocaleFormatIndonesia, NameIndexPage, SatuanWaktu, TabTitle, lib, timeSince } from "../../lib/Lib";

export default function Postings() {
  const [GetSubString, SetSubString] = useState(false);
  const [GetData, SetData] = useState<any>({});
  const [IsShowModal, SetShowModal] = useState(false);
  const [IsLoading, SetLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  function ShareImage() {
    if (navigator.share) return navigator.share({ title: GetData?.title, text: GetData?.describe, url: `${window.location.origin + "/p/" + id}` });
    return SetShowModal(true);
  }

  const LinkShare = window.location.origin + "/p/" + id;

  const gettingData = useCallback(async () => {
    const respon: any = await FetchRequest(lib.apiPoint + "foto/idbuild/" + id + "?key_data=" + lib.keyData, { method: "GET" });
    if (respon.status) {
      SetData(respon.Result);
      return SetLoading(false);
    }

    return navigate("/");
  }, [id, navigate]);

  useEffect(() => {
    gettingData();
  }, [gettingData, id]);

  const lengthDes = GetData?.deskripsi?.length >= 24;

  TabTitle(`${!GetData.judul ? "" : GetData.judul + " - "}` + NameIndexPage);

  if (IsLoading) {
    return <LoadingSpiner />;
  }

  return (
    <>
      <div className="md:mx-10 flex justify-center">
        <div className="lg:max-w-[40%] md:mt-10 md:min-w-[40%] min-w-[100%]">
          <div className="flex flex-col font-sans min-h-[80vh] md:min-h-[100vh] bg-white bg-opacity-40 border border-gray-200 md:rounded-lg md:bg-transparent md:border-transparent md:dark:bg-transparent md:dark:border-transparent md:rounded-t-lg dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700">
            <LazyImage className="md:rounded-lg">
              <img className="md:rounded-lg" src={GetData?.link_foto} alt={GetData?.judul + " " + GetData?.deskripsi} />
            </LazyImage>
            <div className="md:px-5 md:pb-5 md:pt-3 p-5 pt-3 flex-auto">
              <div className="flex flex-row">
                <a href={GetData?.link_original_foto} target="_blank" rel="noreferrer" className="mr-2 text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                  </svg>
                </a>
                <a href={GetData?.link_download_foto} target="_blank" rel="noreferrer" className="mx-1 text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                  </svg>
                </a>
                <button onClick={() => ShareImage()} className="mx-1 text-black dark:text-gray-50 md:hover:text-blue-700 active:text-blue-700 transition duration-200 ease-in-out cursor-default lg:cursor-pointer">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </button>
              </div>
              <h5 className="mb-1 mt-1 text-xl font-[500] tracking-tight text-gray-900 dark:text-white">
                adsdasds
              </h5>
              <p className="font-normal whitespace-pre-line text-base text-gray-700 dark:text-gray-300">
                <span className="inline-block font-semibold text-base text-gray-700 dark:text-gray-200">{timeSince(GetData?.createdAt)}</span>
                {" "}
                {GetSubString ? GetData?.deskripsi : lengthDes ? GetData?.deskripsi.substring(0, 9) + "...." : GetData?.deskripsi}
                {lengthDes ? (

                  <button onClick={() => SetSubString(!GetSubString)} className={`${GetSubString ? "block" : "ml-1"} opacity-60 text- font-[500] select-none text-gray-900 dark:text-gray-400`}>
                    {!GetSubString ? "selengkapnya" : "lebih sedikit"}
                  </button>
                ) : null}
                <span className="block text-sm text-black font-sans select-none dark:text-gray-200">{LocaleFormatIndonesia(GetData?.createdAt, true, SatuanWaktu.bulan, 1)?.TanggalNotHari}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {IsShowModal && (
        <ModalCard callBack={() => SetShowModal(false)} link={LinkShare} />
      )}
    </>
  );
}
