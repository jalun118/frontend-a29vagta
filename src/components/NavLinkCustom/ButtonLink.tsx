import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { iButtonLink } from "./navigation-interface";

export default function ButtonLink({ to, className, children, onClick, ...props }: iButtonLink) {
  const navigate = useNavigate();

  const handlerClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <button className={className} {...props} onClick={(e) => handlerClick(e)}>{children}</button>
  );
}
