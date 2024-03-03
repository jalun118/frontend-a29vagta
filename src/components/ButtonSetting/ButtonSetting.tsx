import { useState } from "react";
import ButtonAbout from "./ButtonAbout";
import ButtonQuetion from "./ButtonQuetion";
import "./ButtonSetting.css";
import ButtonToTop from "./ButtonToTop";
import ButtonTooltipsSetting from "./ButtonTooltipsSetting";
import ButtonTrigerOpen from "./ButtonTrigerOpen";
import ThemesButton from "./ThemesButton";

export default function ButtonSetting() {
  const [isOpen, SetOpen] = useState(false);
  const [isOffSet, SetOffSet] = useState(false);

  return (
    <div className="fixed flex flex-col-reverse bottom-[4.8rem] right-6 z-10 lg:hidden">
      <ButtonTrigerOpen isOpen={isOpen} callback={(e) => SetOpen(e)} />
      <ThemesButton OnOpen={isOpen} />
      <ButtonToTop OnOpen={isOpen} callbackOffset={(value) => SetOffSet(value)} callback={() => SetOpen(false)} />
      <ButtonQuetion OnOpen={isOpen} />
      <ButtonAbout OnOpen={isOpen} />
      <ButtonTooltipsSetting OnOpen={isOpen} IsOffSet={isOffSet} />
    </div>
  );
}
