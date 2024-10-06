import { motion } from "framer-motion";
import { memo } from "react";
import AlertInfo from "../../../components/Alert/AlertInfo";
import CardHomeMobile from "./CardHomeMobile";
import SkeletonPost from "./SkeletonPost";

interface SectionPostProps {
  GetLatestPost: any[];
}

function SectionPost({ GetLatestPost }: SectionPostProps) {
  return (
    <>
      <AlertInfo
        BoldText={"Info"}
        text={"klik kanan atau tahan pada gambar untuk melihat lebih jelas"}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.3,
          duration: 0.7
        }}
        viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
      />
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.5,
          duration: 0.7
        }}
        viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
        className="text-center text-dark dark:text-white md:text-4xl text-3xl my-4 mb-8 font-bold"
      >
        Gallery
      </motion.h2>

      <div className="container mt-2 md:flex md:justify-center md:items-center">
        {GetLatestPost ?
          (<div
            className="grid gap-4 grid-cols-2 md:gap-6 lg:grid-cols-3 lg:max-w-screen-lg min-h-[70vh]">
            {GetLatestPost.map((i, idx) => {
              return (
                <CardHomeMobile to={"/memory#" + i.id_build} image={"https://backend-a29vagta.vercel.app/proxy?img=" + encodeURIComponent("https://drive.google.com/uc?export=download&id=" + i.id_foto)} title={i.judul} key={idx} />
              );
            })}
          </div>) : (
            <div className="grid gap-4 grid-cols-2 md:gap-6 lg:grid-cols-3 lg:max-w-screen-lg min-h-[70vh]">
              <SkeletonPost />
              <SkeletonPost />
              <SkeletonPost />
              <SkeletonPost />
              <SkeletonPost />
              <SkeletonPost />
            </div>
          )}
      </div>
    </>
  );
}

export default memo(SectionPost);
