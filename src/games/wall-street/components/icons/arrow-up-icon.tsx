import { SVGProps } from "react";

export function ArrowUpIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      {...rest}
    >
      <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm37.66 101.66a8 8 0 01-11.32 0L136 107.31V168a8 8 0 01-16 0v-60.69l-18.34 18.35a8 8 0 01-11.32-11.32l32-32a8 8 0 0111.32 0l32 32a8 8 0 010 11.32z"></path>
    </svg>
  );
}