import { memo } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { BadgeBendahara, BadgeChairman, BadgeDevTeam, BadgeEagle, BadgeFlower, BadgeOsis, BadgeSekretaris, BadgeViceChairman } from "../../lib/AssetIcon/IconCustom";
import { BrandTitle, NameIndexPage, TabTitle } from "../../lib/Lib";

function Document() {
  TabTitle("Dokumentasi | " + NameIndexPage);

  return (
    <>
      <div className="md:mx-10 mt-3 mx-4 my-6 flex justify-center">
        <div className="lg:max-w-[80%]">
          <div className="pb-4 mb-3 font-roboto">
            <h1 className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white" id="content"><BrandTitle /> - Question</h1>
            <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 text-justify"><span className="ml-8" />Mulailah mengupload gambar maupun video kalian agar dapat dilihat dan dinikmati bagi orang yang memiliki penyimpanan terbatas, untuk mengingatkan kembali tentang kelas IX A angkatan 29 {" :-)"}.</p>
          </div>
          <hr className="border dark:border-gray-200 border-gray-500" />
          <div id="upload-content" className="dark:text-white">
            <h2 id="introduction" className="relative group text-2xl font-semibold mt-8 mb-4">Instruksi
              <span className="absolute -top-[140px]"></span>
              <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#introduction" aria-label="Link to this section: Introduction">#</a>
            </h2>
            <h3 className="relative group text-xl font-semibold mt-6 mb-4">Mengirim media
              <span id="Mengirimmedia" className="absolute -top-[140px]"></span>
              <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#Mengirimmedia" aria-label="Link to this section: Introduction">#</a>
            </h3>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">1.</span>
                <p>Upload terlebih dahulu foto maupun video kegoogle drive, {" "}<a className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500" href="https://support.google.com/drive/answer/2424368?hl=id" target={"_blank"} rel="noreferrer">cara upload file ke drive</a>
                  ,{" "}upload sampai selesai.
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">2.</span>
                <p>Ubah akses file yang awanya private menjadi public, {" "}<a className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500" href="https://support.google.com/drive/answer/2494822?hl=id#zippy=%2Cmengizinkan-akses-umum-ke-file" target={"_blank"} rel="noreferrer">Mengizinkan akses umum ke file Google Drive.</a>
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">3.</span>
                <p>Salin link file yang akan di kirimkan, {" "}<a className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500" href="https://support.google.com/googleone/answer/2494822?hl=id#zippy=%2Cmembagikan-file-secara-publik" target={"_blank"} rel="noreferrer">Membagikan File Secara publik Google Drive</a>, atau <a className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500" href="https://www.youtube.com/results?search_query=cara+menyalin+link+google+drive" target={"_blank"} rel="noreferrer">Tonton di Youtube</a>.
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">4.</span>
                <p>Tempel link sesuai pada tempatnya <Link to={"/upload"} className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500">Form</Link> dan jangan lupa isi judul dan deskripisinya.
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">5.</span>
                <p>Selesai {" :-)"}, jika masih bingung bisa hubungi <span className="text-blue-700 dark:text-blue-500">Admin Developer</span>.
                </p>
              </li>
            </ol>
          </div>

          <div id="information" className="dark:text-white">
            <h2 id="information" className="relative group text-2xl font-semibold mt-8 mb-4">Information
              <span className="absolute -top-[140px]"></span>
              <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#information" aria-label="Link to this section: Introduction">#</a>
            </h2>
            <h3 className="relative group text-xl font-semibold mt-6 mb-4">Lencana ( Badge )
              <span id="lecana" className="absolute -top-[140px]"></span>
              <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#lecana" aria-label="Link to this section: Introduction">#</a>
            </h3>

            <div className="relative overflow-x-auto shadow-md rounded-xl max-w-[380px] md:max-w-screen-sm border-[1px] border-gray-500 dark:border-gray-600 dark:text-white">
              <table className="w-full text-sm text-left text-gray-900 dark:text-white table-auto">
                <thead className="text-xs text-gray-900 border-b border-gray-500 uppercase bg-opacity-70 bg-gray-50 dark:bg-gray-700 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Icon
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Lencana
                    </th>
                  </tr>
                </thead>
                <tbody className="capitalize">
                  <tr className="bg-white border-b border-gray-500 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeEagle className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      Siswa
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeFlower className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      siswi
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeChairman className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      Ketua kelas
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeViceChairman className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      Wakil Ketua kelas
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeOsis className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      anggota Osis
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeSekretaris className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      sekretaris
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeBendahara className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      Bendahara
                    </td>
                  </tr>
                  <tr className="bg-white border-b bg-opacity-70 border-gray-500  dark:bg-gray-900 dark:bg-opacity-70 dark:border-gray-700">
                    <th scope="row" className="px-6 py-2">
                      <BadgeDevTeam className="w-9 h-9" />
                    </th>
                    <td className="px-3 py-2 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      Dev team
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default memo(Document);
