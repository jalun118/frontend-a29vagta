import { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iButtonLink } from "./navigation-interface";

export default function ButtonActive({ to, className, children, onClick, ...props }: iButtonLink) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.toLowerCase() === to;

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
