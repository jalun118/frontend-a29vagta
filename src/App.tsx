import { lazy, Suspense, useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequestApi from "./lib/RequestHook/RequestApi";

import Navbar from "./components/Navigator/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AppContext } from "./lib/context/app-context";
import { SettupContext } from "./lib/context/settup-context";
import { LoadingSpiner } from "./lib/Lib";

import BottomNav from "./components/BottomNavigation/BottomNav";
import ButtonSetting from "./components/ButtonSetting/ButtonSetting";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FotoSubmenu from "./Pages/Memory/Foto/FotoSubmenu";
import TemanSubMenu from "./Pages/Memory/Teman/TemanSubMenu";
import VideoSubMenu from "./Pages/Memory/Video/VideoSubMenu";
import Postings from "./Pages/Postingan/Postings";
import TeamInfo from "./Pages/Team/TeamInfo";
import UploadFoto from "./Pages/Upload/UploadFoto/UploadFoto";
import UploadVideo from "./Pages/Upload/UploadVideo/UploadVideo";

const Home = lazy(() => import("./Pages/Home/Home"));
const Watch = lazy(() => import("./Pages/Watch/Watch"));
const Memory = lazy(() => import("./Pages/Memory/Memory"));
const Document = lazy(() => import("./Pages/Document/Document"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const UploadPage = lazy(() => import("./Pages/Upload/UploadPage"));
const TermsConditions = lazy(() => import("./Pages/TermsConditions"));

function RefreshBrowser() {
  window.location.reload();
}

function BodyClass() {
  document.body.classList.add("paralax-h-full", "dark:bg-gray-900", "background-default");
}

BodyClass();

function App() {
  let SettupInit: any = false;
  const localSetting = localStorage.getItem("setting");
  if (localSetting !== null) {
    SettupInit = JSON.parse(localStorage.getItem("setting") || "");
  }
  if (!SettupInit) {
    const _initState = JSON.stringify({ themes: "light", showTooltips: true });
    SettupInit = _initState;
    localStorage.setItem("setting", _initState);
  }

  const [GetContextSettup, SetContextSettup] = useState({
    themes: SettupInit.themes || "light",
    showTooltips: SettupInit.showTooltips || true
  });

  const RequestContext = useCallback(() => {
    return RequestApi();
  }, []);

  return (
    <SettupContext.Provider value={{ GetContextSettup, SetContextSettup }}>
      <div className="App child-app-back-drop">
        <Navbar />
        <ScrollToTop />
        <main className="lg:mb-auto mb-4">
          <div className="content">
            <Suspense fallback={<LoadingSpiner />}>
              <AppContext.Provider value={RequestContext()}>
                <Routes>
                  <Route path='' element={<Home />} />
                  <Route path="watch" element={<Watch />} />
                  <Route path='memory' element={<Memory />} >
                    <Route path='' element={<FotoSubmenu />} />
                    <Route path='video' element={<VideoSubMenu />} />
                    <Route path='teman' element={<TemanSubMenu />} />
                  </Route>
                  <Route path="upload" element={<UploadPage />}>
                    <Route path='' element={<UploadFoto />} />
                    <Route path='video' element={<UploadVideo />} />
                  </Route>
                  <Route path='question' element={<Document />} />
                  <Route path='p/:id' element={<Postings />} />
                  <Route path='team' element={<TeamInfo />} />
                  <Route path='privacy-policy' element={<PrivacyPolicy />} />
                  <Route path='terms-conditions' element={<TermsConditions />} />
                  <Route path="*" element={<ErrorPage ErrorCode={404} message={"halaman tidak ditemukan"} Redirect="/" callBack={() => RefreshBrowser()} />} />
                </Routes>
              </AppContext.Provider>
            </Suspense>
          </div>
        </main>
        <ButtonSetting />
        <BottomNav />
      </div>
    </SettupContext.Provider>
  );
}

export default App;
