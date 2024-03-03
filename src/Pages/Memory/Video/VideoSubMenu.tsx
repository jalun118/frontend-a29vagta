import { useContext } from "react";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import CardLink from "../../../components/card/CardLink";
import { LoadingSpiner, NameIndexPage, TabTitle } from "../../../lib/Lib";
import { AppContext } from "../../../lib/context/app-context";

export default function VideoSubMenu() {
  TabTitle("Video | Album | " + NameIndexPage);
  const context = useContext(AppContext);
  const { GetVideo, LoadingVideo, ErrorVideo } = context.video;

  const mapping = GetVideo.map((idx: any, i: number) => {
    return (
      <CardLink
        key={i}
        thumbnail={"https://drive.google.com/uc?id=" + idx.id_thumb}
        title={idx.judul}
        date={idx.createdAt}
        to={"/watch?v=" + idx.id_build}
      />
    );
  });

  return (
    <>
      {LoadingVideo ? <LoadingSpiner /> : (ErrorVideo[0] === false) ? <ErrorPage message={ErrorVideo[2]} ErrorCode={ErrorVideo[1]} />
        : (
          <div className="grid gap-0 md:gap-7 pb-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 md:container">
            {mapping}
          </div>
        )}
    </>
  );
}
