import { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iButtonLink } from "./navigation-interface";

export default function ButtonLinkActive({ to, className, children, onClick, ...props }: iButtonLink) {
  const navigate = useNavigate();
  const location = useLocation();
  const toPath = to.toLowerCase();
  let locationPathname = location.pathname;
  locationPathname = locationPathname.toLowerCase();
  const isActive = (locationPathname === toPath) || locationPathname.startsWith(toPath) && (locationPathname.charAt(toPath.length) === "/");

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <>
      <button className={isActive ? `${className} active` : className} {...props} onClick={(e) => handlerClick(e)}>{children}</button>
    </>
  );
}
