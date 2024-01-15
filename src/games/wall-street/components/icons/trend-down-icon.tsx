import { mouseOutParent, mouseOverParent } from "@/games/utils/mouseUtils";
import { useEffect, useRef, useState } from "react";

interface TrendDownIconProps {
  colorHover?: string;
}

export function TrendDownIcon({ colorHover = "#FFF" }: TrendDownIconProps) {

  const [mouseOver, setMouseOver] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    document.addEventListener("mouseover", mouseOverParentIcon);
    document.addEventListener("mouseout", mouseOutParentIcon);
  }, [])

  const mouseOverParentIcon = (e: any) => mouseOverParent(svgRef, setMouseOver, e);
  const mouseOutParentIcon = (e: any) => mouseOutParent(svgRef, setMouseOver, e);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="29"
      fill="none"
      viewBox="0 0 34 29"
      ref={svgRef}
    >
      <path
        fill={mouseOver ? colorHover : "#fff"}
        fillRule="evenodd"
        d="M25.455 19.91h7.636v-7.637l-2.637 2.636-9.545-9.09-2.525 2.524L8.909 0 6.182 3l12.364 10.273 2.433-2.434 6.926 6.62-2.45 2.45z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint0_linear_2_36)"
        fillRule="evenodd"
        d="M.182 8.636H6V29H.182V8.636zm13.09 5.819H7.456V29h5.818V14.455zm1.455 2.909h5.819V29h-5.819V17.364zM22 21h5.818v8H22v-8z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2_36"
          x1="28"
          x2="-30.5"
          y1="29"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.275" stopColor={mouseOver ? colorHover : "#fff"}></stop>
          <stop offset="1" stopColor={mouseOver ? colorHover : "#fff"} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}