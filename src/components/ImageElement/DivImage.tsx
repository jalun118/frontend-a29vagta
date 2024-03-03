import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ImageToBase64 } from "../../lib/Lib";

interface DivImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
}

export default function DivImage({ src, ...props }: DivImageProps) {
  return <div className={props.className} {...props} style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${ImageToBase64(src)})` }}></div>;
}
