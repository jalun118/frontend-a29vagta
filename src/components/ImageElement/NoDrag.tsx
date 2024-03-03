import { DetailedHTMLProps } from "react";
import "./styleNoDrag.css";

interface NoDragProps extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt?: string;
}

export default function NoDrag({ src, alt, ...props }: NoDragProps) {
  return <img src={src} alt={alt} className={props.className ? `no-drag-image ${props.className}` : "no-drag-image"} {...props} />;
}
