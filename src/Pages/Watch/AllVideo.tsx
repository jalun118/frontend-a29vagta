import { useContext } from "react";
import { AppContext } from "../../lib/context/app-context";
import SideVideo from "./SideVideo";

export default function AllVideo({ id }: { id: string; }) {
  const context = useContext(AppContext);
  const { GetVideo } = context.video;

  return (
    GetVideo.map((idx: any, i: number) => {
      if (idx.id_build !== id) {
        return <SideVideo thisVideo={idx} key={i} />;
      }
      return null;
    })
  );
}
