import { DetailedHTMLProps, HTMLAttributes, MouseEvent, MouseEventHandler, memo } from "react";
import { useNavigate } from "react-router-dom";
import { LazyImage, LocaleFormatIndonesia, timeSince } from "../../lib/Lib";

interface iCardLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  to: string;
  thumbnail: string;
  title: string;
  date: string | number | Date;
  onClick?: MouseEventHandler;
}

function CardLink({ to, thumbnail, title, date, onClick, ...props }: iCardLinkProps) {
  const navigate = useNavigate();
  const lengthJudul = title.length >= 60;

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <div {...props}>
      <div onClick={(e) => handlerClick(e)} className="select-none md:max-w-sm flex font-sans flex-col relative md:my-4 mb-3 transition-all duration-150 active:opacity-80 bg-white border bg-opacity-40 border-gray-200 md:bg-transparent md:border-transparent md:dark:bg-transparent md:dark:border-transparent dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700">
        <LazyImage className="md:rounded-lg">
          <img className="md:rounded-lg" src={thumbnail} alt={title} onContextMenu={(e) => e.preventDefault()} />
        </LazyImage>
        <div className="p-4 py-5 pt-3 sm:p-5 md:px-5 md:py-5 md:pt-3">
          <h5 className="text-lg mb-1 sm:text-xl font-[500] tracking-normal text-gray-900 dark:text-white">
            {lengthJudul ? title.substring(0, 43) + "..." : title}
          </h5>
          <span className="block font-normal text-sm text-gray-700 dark:text-gray-300">{timeSince(date) + " • " + LocaleFormatIndonesia(date)?.TanggalNotHari}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(CardLink);