import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LocaleFormatIndonesia, timeSince } from "../../lib/Lib";

export default function SideVideo({ thisVideo }: { thisVideo: any; }) {
  const navigate = useNavigate();

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/watch?v=" + thisVideo.id_build);
  };

  return (
    <div onClick={(e) => handlerClick(e)} className="lg:space-x-5 lg:flex md:items-start transition-all duration-200 ease-in-out hover:opacity-90 mb-3 border-b-[1px] border-b-gray-300 dark:border-b-gray-600 lg:mb-0 lg:border-none">
      <div style={{ aspectRatio: 8.7 / 4.9 }} className="flex w-full lg:max-w-[40%] md:rounded-lg bg-[#E0E0E0] dark:bg-[#323d4e]">
        <img src={"https://backend-a29vagta.vercel.app/proxy?img=" + encodeURIComponent("https://drive.google.com/uc?export=download&id=" + thisVideo.id_thumb)} alt="dad" className="bg-cover md:rounded-lg" onContextMenu={(e) => e.preventDefault()} />
      </div>
      <div className="flex flex-col w-[100%] my-3 lg:my-0 px-5 lg:px-1">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {thisVideo.judul}
        </h5>
        <span className="block font-normal text-sm text-gray-700 dark:text-gray-400 capitalize">{timeSince(thisVideo.createdAt) + " • " + LocaleFormatIndonesia(thisVideo.createdAt)?.TanggalNotHari}</span>
      </div>
    </div>
  );
}
