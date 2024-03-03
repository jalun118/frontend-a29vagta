import { memo, useEffect, useReducer } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoadingSpiner, NameIndexPage, TabTitle, defaultDescription, lib, metaDescription, useSearchQuery } from "../../lib/Lib";
import AllVideo from "./AllVideo";
import ErrorVideoNotFound from "./ErrorVideoNotFound";
import LoadingVideo from "./LoadingVideo";
import ReadyVideo from "./ReadyVideo";

const initialStateWatch = {
  Data: {},
  GetNullQuery: false,
  GetFetchState: false,
  GetRedirect: false
};

const WatchStatus = {
  Data: "DATA_READY",
  GetNullQuery: "QUERY_KOSONG",
  GetRequest: "QUERY_REQUEST",
  GetRedirect: "REDIRECT"
};

function ReducerWatch(state: any, action: any) {
  switch (action.type) {
    case WatchStatus.Data:
      return { ...state, Data: action.payload.Data };
    case WatchStatus.GetNullQuery:
      return { ...state, GetNullQuery: true };
    case WatchStatus.GetRequest:
      return { ...state, GetFetchState: action.isLoading };
    case WatchStatus.GetRedirect:
      return { ...state, GetRedirect: true };
    default:
      break;
  }
}

function Watch() {
  const { pathname, search } = useLocation();
  const [state, dipatch] = useReducer(ReducerWatch, initialStateWatch);

  const query = useSearchQuery();
  const id = query.query.get("v");

  TabTitle(NameIndexPage);

  async function GetData(id: string) {
    await dipatch({ type: WatchStatus.GetRequest, isLoading: false });
    await dipatch({ type: WatchStatus.Data, payload: { Data: {} } });
    await fetch(lib.apiPoint + "video/idbuild/" + id + "?key_data=" + lib.keyData)
      .then(res => res.json())
      .then(respon => {
        if (respon.response === 404 || !respon.status) return dipatch({ type: WatchStatus.GetNullQuery });
        if (respon.status) return dipatch({ type: WatchStatus.Data, payload: { Data: respon.Result } });
      }).catch(err => {
        console.log(err);
        return dipatch({ type: WatchStatus.GetNullQuery });
      });
    await dipatch({ type: WatchStatus.GetRequest, isLoading: true });
  }

  useEffect(() => {
    if (query.search === "" || query.query.get("v") === null) return dipatch({ type: WatchStatus.GetRedirect });
  }, [query, pathname, search]);

  useEffect(() => {
    GetData(id || "");
  }, [id]);

  TabTitle(`${!state.Data.judul ? "" : state.Data.judul + " - "}` + NameIndexPage);
  metaDescription(`${!state.Data.deskripsi ? defaultDescription : state.Data.deskripsi}`);

  return (
    <>
      {state.GetRedirect && (
        <Navigate to="/memory/video" replace={true} />
      )}
      <div className="md:container font-sans">
        <div className="flex justify-between md:py-4 pt-2 flex-col lg:flex-row">
          {state.GetNullQuery ? (
            <ErrorVideoNotFound />
          ) : state.GetFetchState ? (
            <ReadyVideo Data={state.Data} />
          ) : (
            <LoadingVideo />
          )}
          <div className="flex sm:px-2 sm:grid sm:grid-cols-2 sm:gap-3 mb-6 lg:mb-0 border-b-slate-300 border-b-[1px] lg:gap-5 w-[100%] lg:w-[70%] mt-2 lg:mt-0 flex-col lg:flex-col lg:flex">
            {state.GetFetchState ?
              <AllVideo id={id || ""} /> : <LoadingSpiner />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Watch);