import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import { lib, NameIndexPage, TabTitle } from "../../../lib/Lib";

const InitialVideo = {
  GetLinkOriVideo: "",
  GetLinkThumb: "",
  GetThumb: false,
  GetJudul: "",
  GetDeskripsi: "",
  GetSend: false,
  GetNavigation: false,
  GetCallBackMsg: {},
};

const TypeUploadVideo = {
  GetLinkOriVideo: "GET_LINK_ORI",
  GetLinkThumb: "GET_LINK_THUMB",
  GetThumb: "GET_THUMB",
  GetJudul: "GET_JUDUL",
  GetDeskripsi: "GET_DESKRIPISi",
  GetSend: "GET_SEND",
  GetNavigation: "GET_NAVIGATION",
  GetCallBackMsg: "GET_CALLBACK_MSG",
  GetError: "GET_ERROR"
};

function ReduceUplaodVideo(state: any, action: any) {
  switch (action.type) {
    case TypeUploadVideo.GetLinkOriVideo:
      return { ...state, GetLinkOriVideo: action.GetLinkOriVideo };
    case TypeUploadVideo.GetLinkThumb:
      return { ...state, GetLinkThumb: action.GetLinkThumb };
    case TypeUploadVideo.GetThumb:
      return { ...state, GetThumb: action.GetThumb };
    case TypeUploadVideo.GetJudul:
      return { ...state, GetJudul: action.GetJudul };
    case TypeUploadVideo.GetDeskripsi:
      return { ...state, GetDeskripsi: action.GetDeskripsi };
    case TypeUploadVideo.GetSend:
      return { ...state, GetSend: action.GetSend };
    case TypeUploadVideo.GetNavigation:
      return { ...state, GetNavigation: action.GetNavigation };
    case TypeUploadVideo.GetCallBackMsg:
      return { ...state, GetCallBackMsg: action.GetCallBackMsg };
    case TypeUploadVideo.GetError:
      return { ...state, GetCallBackMsg: action.GetCallBackMsg, GetNavigation: false };
    default:
      break;
  }
}

export default function UploadVideo() {
  TabTitle("Video | Form | " + NameIndexPage);

  const [state, dipatch] = useReducer(ReduceUplaodVideo, InitialVideo);

  function RequestPost(e: any) {
    e.preventDefault();

    dipatch({ type: TypeUploadVideo.GetSend, GetSend: true });
    fetch(`${lib.apiPoint}video?key_data=${lib.keyData}`, {
      method: "POST",
      body: JSON.stringify({
        link_ori_thumb: state.GetThumb ? state.GetLinkThumb : null,
        link_original_video: state.GetLinkOriVideo,
        judul: state.GetJudul,
        deskripsi: state.GetDeskripsi ? state.GetDeskripsi : ""
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(respon => {
        dipatch({ type: TypeUploadVideo.GetSend, GetSend: false });
        if (!respon.status) {
          dipatch({ type: TypeUploadVideo.GetCallBackMsg, GetCallBackMsg: respon });
          return;
        }
        return dipatch({ type: TypeUploadVideo.GetNavigation, GetNavigation: true });
      })
      .catch(err => {
        console.log(err);
        dipatch({ type: TypeUploadVideo.GetError, GetCallBackMsg: err });
      });
  }

  return (
    <>
      {state.GetNavigation && (
        <Navigate to={"/memory/video"} replace={true} />
      )}
      <form onSubmit={(e) => RequestPost(e)}>
        <div className={`mb-6 ${(state.GetCallBackMsg.fieldError === "link_original_video") ? "field-error" : ""}`}>
          <label htmlFor="link_ori" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link Video</label>
          <input disabled={state.GetSend} type="text" id="link_ori" className="form-input transition duration-200 ease-in-out" placeholder="https://drive.google.com/file/d/197serXJCffpL0I_4vB4KK2S1H7Mbet85" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadVideo.GetLinkOriVideo, GetLinkOriVideo: e.target.value })} />
          <p className="subtitle">{(state.GetCallBackMsg.fieldError === "link_original_video") ? state.GetCallBackMsg.message : ""}</p>
        </div>
        <div className={`mb-${state.GetThumb ? "6" : "2"} ${(state.GetCallBackMsg.fieldError === "link_ori_thumb") ? "field-error" : ""}`}>
          <label htmlFor="link_ori_thumb" className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link Thumbnail (<span className="text-green-600 dark:text-green-500">Optional</span>)</label>
          <div className="inline-flex items-center align-middle ml-2">
            <input id="link_ori_thumb" type="checkbox" value="" onChange={() => dipatch({ type: TypeUploadVideo.GetThumb, GetThumb: !state.GetThumb })} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
          </div>
          {state.GetThumb && (
            <>
              <input disabled={state.GetSend} type="text" id="link_ori_thumb" className="form-input transition duration-200 ease-in-out" placeholder="https://drive.google.com/file/d/123456789_4vdassad7Mbet85" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadVideo.GetLinkThumb, GetLinkThumb: e.target.value })} />
              <p className="subtitle">{(state.GetCallBackMsg.fieldError === "link_ori_thumb") ? state.GetCallBackMsg.message : ""}</p>
            </>
          )}
        </div>
        <div className={`mb-6 ${(state.GetCallBackMsg.fieldError === "judul") ? "field-error" : ""}`}>
          <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
          <input disabled={state.GetSend} type="text" id="judul" className="form-input transition duration-200 ease-in-out" placeholder="Judulnya mas bro" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadVideo.GetJudul, GetJudul: e.target.value })} />
          <p className="subtitle">{(state.GetCallBackMsg.fieldError === "judul") ? state.GetCallBackMsg.message : ""}</p>
        </div>
        <div className="mb-6">
          <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
          <textarea disabled={state.GetSend} rows={5} id="deskripsi" placeholder="jan lupa deskrpisnya" className="form-input transition duration-200 ease-in-out" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadVideo.GetDeskripsi, GetDeskripsi: e.target.value })}></textarea>
        </div>
        <div className="block">
          <button disabled={state.GetSend} type="submit" className=" inline-block transition duration-200 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {state.GetSend ? (
              <>
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
              </>
            ) : (
              <>Submit</>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
