import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import { lib, NameIndexPage, TabTitle } from "../../../lib/Lib";

const InitialFoto = {
  GetLinkOri: "",
  GetJudul: "",
  GetDeskripsi: "",
  GetSend: false,
  GetNavigation: false,
  GetCallBackMsg: {}
};

const TypeUploadFoto = {
  GetLinkOri: "GET_LINK_ORI",
  GetJudul: "GET_JUDUL",
  GetDeskripsi: "GET_DESKRIPSI",
  GetSend: "GET_SEND",
  GetNavigation: "GET_NAVIGATION",
  GetCallBackMsg: "GET_CALBACK_MSG",
  GetError: "GET_ERROR"
};

function ReduceUplaodFoto(state: any, action: any) {
  switch (action.type) {
    case TypeUploadFoto.GetLinkOri:
      return { ...state, GetLinkOri: action.GetLinkOri };
    case TypeUploadFoto.GetJudul:
      return { ...state, GetJudul: action.GetJudul };
    case TypeUploadFoto.GetDeskripsi:
      return { ...state, GetDeskripsi: action.GetDeskripsi };
    case TypeUploadFoto.GetSend:
      return { ...state, GetSend: action.GetSend };
    case TypeUploadFoto.GetNavigation:
      return { ...state, GetNavigation: action.GetNavigation };
    case TypeUploadFoto.GetCallBackMsg:
      return { ...state, GetCallBackMsg: action.GetCallBackMsg };
    case TypeUploadFoto.GetError:
      return { ...state, GetCallBackMsg: action.GetCallBackMsg, GetNavigation: false };
    default:
      break;
  }
}

export default function UploadFoto() {
  TabTitle("Foto | Form | " + NameIndexPage);

  const [state, dipatch] = useReducer(ReduceUplaodFoto, InitialFoto);

  function RequestPost(e: any) {
    e.preventDefault();
    dipatch({ type: TypeUploadFoto.GetSend, GetSend: true });
    fetch(`${lib.apiPoint}foto?key_data=${lib.keyData}`, {
      method: "POST",
      body: JSON.stringify({
        link_original_foto: state.GetLinkOri,
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
        dipatch({ type: TypeUploadFoto.GetSend, GetSend: false });
        if (!respon.status) {
          dipatch({ type: TypeUploadFoto.GetCallBackMsg, GetCallBackMsg: respon });
          return;
        }
        return dipatch({ type: TypeUploadFoto.GetNavigation, GetNavigation: true });
      })
      .catch(err => {
        console.log(err);
        return dipatch({ type: TypeUploadFoto.GetError, GetCallBackMsg: err });
      });
  }

  return (
    <>
      {state.GetNavigation && (
        <Navigate to={"/memory"} replace={true} />
      )}
      <form onSubmit={(e) => RequestPost(e)}>
        <div className={`mb-6 ${(state.GetCallBackMsg.fieldError === "link_original_foto") ? "field-error" : ""}`}>
          <label htmlFor="link_ori" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link Foto</label>
          <input disabled={state.GetSend} type="text" id="link_ori" className="form-input transition duration-200 ease-in-out" placeholder="https://drive.google.com/file/d/dsdsdsd23e" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadFoto.GetLinkOri, GetLinkOri: e.target.value })} />
          <p className="subtitle">{(state.GetCallBackMsg.fieldError === "link_original_foto") ? state.GetCallBackMsg.message : ""}</p>
        </div>
        <div className={`mb-6 ${(state.GetCallBackMsg.fieldError === "judul") ? "field-error" : ""}`}>
          <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
          <input disabled={state.GetSend} type="text" id="judul" className="form-input transition duration-200 ease-in-out" placeholder="Judulnya mas bro" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadFoto.GetJudul, GetJudul: e.target.value })} />
          <p className="subtitle">{(state.GetCallBackMsg.fieldError === "judul") ? state.GetCallBackMsg.message : ""}</p>
        </div>
        <div className="mb-6">
          <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
          <textarea disabled={state.GetSend} rows={5} id="deskripsi" placeholder="jan lupa deskrpisnya" className="form-input transition duration-200 ease-in-out" autoComplete="off" onChange={(e) => dipatch({ type: TypeUploadFoto.GetDeskripsi, GetDeskripsi: e.target.value })}></textarea>
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
