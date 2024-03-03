import { motion } from "framer-motion";

export default function SectionWelcome() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-36 lg:py-56">
        <motion.h1
          className="mb-6 text-3xl max-w-screen-xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            delay: 0.4,
            duration: 0.7
          }}
        >
          9 A angkatan 29 SMPN 1 Pagedangan
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            delay: 0.75,
            duration: 0.7
          }}
          className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48"
        >
          Kelas 9A angkatan 29 di SMPN 1 Pagedangan adalah kelompok siswa yang penuh semangat, berbakat, dan berprestasi, siap menggapai kesuksesan akademik dan non-akademik.
        </motion.p>
      </div>
    </section>
  );
}


