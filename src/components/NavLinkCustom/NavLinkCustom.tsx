import { ReactNode } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

interface NavProps extends LinkProps {
  to: string;
  children?: ReactNode;
}

export default function NavLinkCustom({ to, children, ...props }: NavProps) {
  const { pathname } = useResolvedPath(to);
  const match = useMatch({ path: pathname, end: true });

  return (
    <Link to={to} {...props} className={match ? `${props.className} active` : props.className}>
      {children}
    </Link>
  );
}
