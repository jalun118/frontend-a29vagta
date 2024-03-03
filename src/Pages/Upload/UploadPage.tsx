import { memo } from "react";
import { Outlet } from "react-router-dom";
import ButtonActive from "../../components/NavLinkCustom/ButtonActive";
import { NameIndexPage, TabTitle } from "../../lib/Lib";
import "./uploadpage.css";

function UploadPage() {
  TabTitle("Form | " + NameIndexPage);
  return (
    <div className="min-h-[85vh]">
      <div className="flex justify-center my-4">
        <div className="w-full sm:max-w-md max-w-[95%] md:max-w-lg p-5 px-7 bg-white bg-opacity-40 dark:bg-opacity-40 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="inline-flex rounded-md shadow-sm mb-5">
            <ButtonActive to={"/upload"} className="nav-form nav-form-child px-4 py-2 text-sm font-medium">
              Foto
            </ButtonActive>
            <ButtonActive to={"/upload/video"} className="nav-form nav-form-child px-4 py-2 text-sm font-medium">
              Video
            </ButtonActive>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default memo(UploadPage);