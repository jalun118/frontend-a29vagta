import { motion } from "framer-motion";
import NoDrag from "../../../components/ImageElement/NoDrag";
import ButtonLink from "../../../components/NavLinkCustom/ButtonLink";
import { LazyImage } from "../../../lib/Lib";

export default function SectionAjakan() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path className="fill-blue-400 dark:fill-blue-500" fillOpacity="1" d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,80C560,53,640,75,720,96C800,117,880,139,960,138.7C1040,139,1120,117,1200,122.7C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
      </svg>
      <div className="bg-blue-400 py-20 lg:p-0 dark:bg-blue-500">
        <div className="md:mx-4 h-full">
          <div className="container m-auto w-full">
            <div className="flex flex-col justify-evenly mx-2 lg:flex-row">
              <motion.div
                className="relative inline-flex select-none border-[1px] rounded-xl dark:border-gray-200"
                initial={{ y: 20, x: -40, opacity: 0 }}
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.5,
                  duration: 0.7
                }}
                viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
              >
                <div className="block aspect-video w-full rounded-lg overflow-hidden">
                  <LazyImage background={false} className="w-full h-full">
                    <NoDrag className="h-full w-full object-cover" src="https://cdni.iconscout.com/illustration/free/thumb/free-upload-image-ui-2043035-1731294.png" onContextMenu={(e) => e.preventDefault()} />
                  </LazyImage>
                </div>
              </motion.div>

              <div className="lg:mt-20 mt-9">
                <motion.h2
                  className="font-bold font-['comic_sans_ms'] text-xl sm:text-3xl max-w-md text-white"
                  initial={{ y: -20, x: 40, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.8,
                    duration: 0.7
                  }}
                  viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
                >
                  Bagikan Kreativitasmu, Unggah dan Berkarya!
                </motion.h2>
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.9,
                    duration: 0.7
                  }}
                  viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
                >
                  <ButtonLink to="/upload" className="inline-flex items-center mt-5 bg-gradient-to-r transition-all duration-200 ease-in-out from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-xl shadow-md">
                    Bagikan
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mx-1 w-6 h-w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </ButtonLink>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="fill-blue-400 dark:fill-blue-500 origin-center rotate-180" fillOpacity="1" d="M0,96L26.7,85.3C53.3,75,107,53,160,80C213.3,107,267,181,320,218.7C373.3,256,427,256,480,213.3C533.3,171,587,85,640,53.3C693.3,21,747,43,800,80C853.3,117,907,171,960,181.3C1013.3,192,1067,160,1120,165.3C1173.3,171,1227,213,1280,224C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" />
      </svg>

      <div className="mt-10 mb-5">
        <div className="md:mx-4 h-full">
          <div className="container m-auto w-full">
            <div className="flex flex-col-reverse justify-evenly mx-2 lg:flex-row">
              <div className="lg:mt-16 mt-6">
                <motion.h2
                  className="font-bold text-xl sm:text-3xl max-w-md dark:text-white"
                  initial={{ x: -10, y: -30, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.6,
                    duration: 0.7
                  }}
                  viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
                >
                  Simpan dengan Aman, Unggah ke Google Drive!
                </motion.h2>
                <motion.p
                  className="max-w-md mt-5 dark:text-gray-100"
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.7,
                    duration: 0.7
                  }}
                  viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
                >
                  <span className="ml-7"></span> Hadirkan Koleksi Media Anda: Unggah ke Google Drive! Hanya Google Drive yang kami dukung untuk menampilkan media Anda. Segera unggah dan berbagi karya Anda dengan pengunjung kami!
                </motion.p>

                <motion.button
                  onClick={() => window.open("https://drive.google.com/drive/my-drive?usp=upload")}
                  className="inline-flex items-center mt-5 bg-gradient-to-r transition-all duration-200 ease-in-out from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-xl shadow-md"
                  initial={{ y: -40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.8,
                    duration: 0.7
                  }}
                  viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
                >
                  Upload
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mx-1 w-[1rem] h-[1rem] inline-block ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </motion.button>
              </div>

              <motion.div
                className="relative inline-flex select-none border-[1px] rounded-xl border-gray-300 dark:border-gray-500"
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.5,
                  duration: 0.7
                }}
                viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
              >
                <div className="block aspect-auto w-full rounded-lg overflow-hidden">
                  <LazyImage background={false} className="w-full h-full" ratio="auto">
                    <NoDrag className="h-full w-full object-cover" src="https://cdni.iconscout.com/illustration/free/thumb/free-customer-database-4277169-3561275.png" onContextMenu={(e) => e.preventDefault()} />
                  </LazyImage>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
