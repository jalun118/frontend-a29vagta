import { GithubIcon, GlobeIcon, InstagramIcon, YoutubeIcon } from "../../lib/AssetIcon/BrandIcon";
import { Brand, BrandTitle2 } from "../../lib/Lib";
import ButtonLink from "../NavLinkCustom/ButtonLink";

export default function Footer() {
  return (
    <footer className="p-4 border-gray-200 dark:border-gray-700 bg-white sm:p-6 dark:bg-gray-900 border">
      <div className="lg:flex lg:justify-between lg:mx-7">
        <div className="mb-6 xl:mb-0">
          <ButtonLink to="/" className="flex items-center">
            <Brand
              className="h-10 mr-2"
              alt="IX A 29 Logo"
              style={{ aspectRatio: "1/1", width: "3rem" }}
            />
            <span className="self-center text-lg sm:text-xl md:text-xl font-semibold whitespace-nowrap dark:text-white">
              <BrandTitle2 className="text-blue-500" />
            </span>
          </ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Flowbite
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="https://reactrouter.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  React router
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.framer.com/motion/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Framer Motion
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://heroicons.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Hero icons
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.svgrepo.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Svg repo
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              FrameWork
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://react.dev/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  React
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://vitejs.dev/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Vite Js
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://www.instagram.com/ix.apaantuh/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Instagram IX A
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/jalun118/frontend-a29vagta"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github Dev
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Official social media
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://smpn1pagedangan.sch.id/"
                  className="hover:underline "
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.instagram.com/smpn1pagedangan_vaghta/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@smpn1pagedangan14"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <ButtonLink to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/terms-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </ButtonLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  target={"_blank"}
                  href="https://ig.me/m/jlngho_c118"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://ig.me/m/ix.apaantuh"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  Instagram Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2023 - {new Date().getFullYear() + 8}{" "}
          <ButtonLink to="/team" className="hover:underline text-blue-600">
            <BrandTitle2 />™
          </ButtonLink>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.youtube.com/@smpn1pagedangan14"
            target={"_blank"}
            className="transition-all duration-150 opacity-60 hover:opacity-100"
            rel="noreferrer"
          >
            <YoutubeIcon className="w-6 h-6" />
            <span className="sr-only">youtube</span>
          </a>
          <a
            href="https://instagram.com/ix.apaantuh/"
            target={"_blank"}
            className="transition-all duration-150 opacity-60 hover:opacity-100"
            rel="noreferrer"
          >
            <InstagramIcon className="w-6 h-6" />
            <span className="sr-only">instagram</span>
          </a>
          <a
            href="https://github.com/jalun118/frontend-a29vagta"
            target={"_blank"}
            className="transition-all duration-150 text-gray-500 hover:text-black dark:text-gray-600 dark:hover:text-white"
            rel="noreferrer"
          >
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://smpn1pagedangan.sch.id/"
            target={"_blank"}
            className="transition-all duration-150 text-gray-500 hover:text-blue-700"
            rel="noreferrer"
          >
            <GlobeIcon className="w-6 h-6" />
            <span className="sr-only">Website</span>
          </a>
        </div>
      </div>
    </footer>
  );
}