import { Link } from "react-router-dom";

interface ErrorPageProps {
  ErrorCode?: number | string;
  message?: string;
  Redirect?: string;
  callBack?: Function | (() => void);
  NullPath?: string;
}

export default function ErrorPage({ ErrorCode, message, Redirect = "/", callBack, NullPath }: ErrorPageProps) {
  if (ErrorCode === 404 || ErrorCode === "404") {
    return (
      <div className="h-[100vh] text-center flex flex-col justify-center" style={{ alignItems: "center" }}>
        <div>
          <h1 className="inline-block m-0 mr-[20px] pr-[23px] text-[24px] font-[500] align-top leading-[49px] border-r-[1px] border-r-slate-400 dark:border-r-white dark:text-white" >{ErrorCode}</h1>
          <div className="inline-block text-left leading-[49px] h-[49px] align-middle">
            <h2 className="dark:text-white text-[20px] font-normal leading-[49px] m-0 p-0">{message ? message : "This page could not be found."} <span className="font-bold text-[18px]">{"ㄟ( ▔, ▔ )ㄏ"}</span></h2>
          </div>
          {NullPath ? (
            <p className="text-[20px] font-normal leading-[25px] m-0 p-0">Route : <code className="font-mono bg-slate-300 p-1 text-gray-900 dark:text-gray-100 rounded-md font-[200] overflow-x-auto">{NullPath}</code></p>
          ) : null}
        </div>
        <div>
          {callBack ? (
            <button onClick={() => callBack()} className="bg-blue-500 inline-block mx-2 px-4 my-3 py-2 ease-in-out duration-200 text-white rounded-md shadow-md hover:bg-blue-600 active:bg-blue-800">
              Refresh
            </button>
          ) : null}
          <Link to={Redirect} className="bg-blue-500 inline-block mx-2 px-4 my-3 py-2 ease-in-out duration-200 text-white rounded-md shadow-md hover:bg-blue-600 active:bg-blue-800">
            Kembali
          </Link>
        </div>
      </div >
    );
  }

  return (
    <div className="h-[100vh] text-center flex flex-col justify-center" style={{ alignItems: "center" }}>
      <div>
        <h1 className="inline-block m-0 mr-[20px] pr-[23px] text-[24px] font-[500] align-top leading-[49px] border-r-[1px] border-r-slate-400 dark:border-r-white dark:text-white" >{ErrorCode}</h1>
        <div className="inline-block text-left leading-[49px] h-[49px] align-middle">
          <h2 className="text-[20px] font-normal leading-[49px] m-0 p-0 dark:text-white">{message} {"〜(￣▽￣〜)"}</h2>
        </div>
      </div>
      <div>
        {callBack ? (
          <button onClick={() => callBack()} className="bg-blue-500 inline-block mx-2 px-4 my-3 py-2 ease-in-out duration-200 text-white rounded-md shadow-md hover:bg-blue-600 active:bg-blue-800">
            Refresh
          </button>
        ) : null}
        <Link to={Redirect} className="bg-blue-500 inline-block mx-2 px-4 my-3 py-2 ease-in-out duration-200 text-white rounded-md shadow-md hover:bg-blue-600 active:bg-blue-800">
          Kembali
        </Link>
      </div>
    </div >
  );
} 