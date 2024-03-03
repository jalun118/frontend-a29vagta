import { memo } from "react";
import { Outlet } from "react-router-dom";
import { NameIndexPage, TabTitle } from "../../lib/Lib";
import SubMenuMemory from "./submenu-memory/SubMenuMemory";

function Memory() {
  TabTitle("Album | " + NameIndexPage);

  return (
    <div className="md:mx-10">
      <SubMenuMemory />
      <div className="font-roboto sub-content">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(Memory);