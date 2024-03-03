import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function SkeletonPost({ ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className="relative inline-flex group select-none" {...props}>
      <div className="block aspect-square w-full h-full rounded-lg overflow-hidden">
        <div className="w-80 h-80 bg-[#E0E0E0] dark:bg-[#323d4e]"></div>
      </div>
    </div>
  );
}
