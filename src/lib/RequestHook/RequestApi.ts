import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { FetchRequest, lib } from "../Lib";

/* intial field request */

const intialRequest = {
  GetFoto: [],
  LoadingFoto: true,
  ErrorFoto: [null, null, null],

  GetVideo: [],
  LoadingVideo: true,
  ErrorVideo: [null, null, null],

  GetTeman: [],
  LoadingTeman: true,
  ErrorTeman: [null, null, null],

  GetLatestPost: null,
  GetTeam: [],
};

/* type field request */

const TypeRequest = {
  GetFoto: "GET_FOTO",
  ErrorFoto: "ERROR_FOTO",

  GetVideo: "GET_VIDEO",
  ErrorVideo: "ERROR_VIDEO",

  GetTeman: "GET_TEMAN",
  ErrorTeman: "ERROR_TEMAN",

  GetLatestPost: "GET_LATEST_POST",
  GetTeam: "GET_TEAM",
};

/* function reducer */

function ReduceRequest(state: any, action: any) {
  switch (action.type) {
    case TypeRequest.GetFoto:
      return { ...state, GetFoto: action.GetFoto, LoadingFoto: false };
    case TypeRequest.ErrorFoto:
      return { ...state, ErrorFoto: action.ErrorFoto, LoadingFoto: false };
    case TypeRequest.GetVideo:
      return { ...state, GetVideo: action.GetVideo, LoadingVideo: false };
    case TypeRequest.ErrorVideo:
      return { ...state, ErrorVideo: action.ErrorVideo, LoadingVideo: false };
    case TypeRequest.GetTeman:
      return { ...state, GetTeman: action.GetTeman, LoadingTeman: false };
    case TypeRequest.ErrorTeman:
      return { ...state, ErrorTeman: action.ErrorTeman, LoadingTeman: false };
    case TypeRequest.GetLatestPost:
      return { ...state, GetLatestPost: action.GetLatestPost };
    case TypeRequest.GetTeam:
      return { ...state, GetTeam: action.GetTeam };
    default:
      break;
  }
}

export default function RequestApi() {
  const { pathname } = useLocation();
  const SPLIT_PATH = pathname.split("/");
  const IS_PATH_TARGET = SPLIT_PATH[1];
  const IS_HOME = IS_PATH_TARGET === "" || IS_PATH_TARGET === null || IS_PATH_TARGET === undefined;
  const IS_MEMORY = IS_PATH_TARGET === "memory";
  const IS_WATCH = IS_PATH_TARGET === "watch";

  const [state, dipatch] = useReducer(ReduceRequest, intialRequest);

  async function gettingTeamMember() {
    const respon: any = await FetchRequest("https://jalun118.github.io/api-temen-temen/apis.json", { method: "GET" });
    return dipatch({ type: TypeRequest.GetTeam, GetTeam: respon.Kenangan_frontend.team });
  }

  async function gettingLatestPost() {
    const respon: any = await FetchRequest(lib.apiPoint + "foto/pagination?perpage=6&key_data=" + lib.keyData, { method: "GET" });
    if (respon.status) {
      return dipatch({ type: TypeRequest.GetLatestPost, GetLatestPost: respon.Result });
    }
  }

  async function gettingDataFoto() {
    const respon: any = await FetchRequest(lib.apiPoint + "foto?key_data=" + lib.keyData, { method: "GET" });
    if (respon.status) {
      return dipatch({ type: TypeRequest.GetFoto, GetFoto: respon.Result });
    }
    return dipatch({ type: TypeRequest.ErrorFoto, ErrorFoto: [respon.status || false, respon.response || 500, respon.message || respon.message.message] });
  }

  async function gettingDataVideo() {
    const respon: any = await FetchRequest(lib.apiPoint + "video?key_data=" + lib.keyData, { method: "GET" });
    if (respon.status) {
      return dipatch({ type: TypeRequest.GetVideo, GetVideo: respon.Result });
    }
    return dipatch({ type: TypeRequest.ErrorVideo, ErrorVideo: [respon.status || false, respon.response || 500, respon.message || respon.message.message] });
  }

  async function gettingDataTeman() {
    const respon: any = await FetchRequest(lib.apiPoint + "teman?key_data=" + lib.keyData, { method: "GET" });
    if (respon.status) {
      return dipatch({ type: TypeRequest.GetTeman, GetTeman: respon.Result });
    }
    return dipatch({ type: TypeRequest.ErrorTeman, ErrorTeman: [respon.status || false, respon.response || 500, respon.message || respon.message.message] });
  }

  useEffect(() => {
    gettingDataFoto();
    gettingDataTeman();
    gettingDataVideo();
    gettingTeamMember();
  }, [IS_MEMORY, IS_WATCH]);

  useEffect(() => {
    gettingLatestPost();
  }, [IS_HOME]);

  const AppContextValue = {
    GetTeam: {
      GetTeam: state.GetTeam
    },
    latest_post: {
      GetLatestPost: state.GetLatestPost
    },
    foto: {
      GetFoto: state.GetFoto,
      LoadingFoto: state.LoadingFoto,
      ErrorFoto: state.ErrorFoto
    },
    video: {
      GetVideo: state.GetVideo,
      LoadingVideo: state.LoadingVideo,
      ErrorVideo: state.ErrorVideo
    },
    teman: {
      GetTeman: state.GetTeman,
      LoadingTeman: state.LoadingTeman,
      ErrorTeman: state.ErrorTeman
    }
  };
  return AppContextValue;
}