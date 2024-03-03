import { memo, useContext } from "react";
import { NameIndexPage, TabTitle } from "../../lib/Lib";
import { AppContext } from "../../lib/context/app-context";
import SectionAjakan from "./SectionAjakan/SectionAjakan";
import SectionPost from "./SectionPost/SectionPost";
import SectionWelcome from "./SectionWelcome/SectionWelcome";
import "./home.css";

function Home() {
  const context = useContext(AppContext);
  const { GetLatestPost } = context.latest_post;
  TabTitle(NameIndexPage);

  return (
    <>
      <div className="bg-hero"></div>
      <div className="z-[1] absolute top-0 left-0">
        <SectionWelcome />
      </div>
      <div className="paralax-h-full bg-white dark:bg-gray-900 pt-5 pb-10">
        <div className="md:mx-4 mt-3 h-full mb-8">
          <SectionPost GetLatestPost={GetLatestPost} />
        </div>
        <SectionAjakan />
      </div>
    </>
  );
}

export default memo(Home);