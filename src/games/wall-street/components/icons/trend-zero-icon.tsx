import { mouseOutParent, mouseOverParent } from "@/games/utils/mouseUtils";
import { useEffect, useRef, useState } from "react";

interface TrendZeroIconProps {
  colorHover?: string;
}

export function TrendZeroIcon({ colorHover = "#FFF" }: TrendZeroIconProps) {

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
      width="29"
      height="34"
      fill="none"
      viewBox="0 0 29 34"
      ref={svgRef}
    >
      <path
        fill={mouseOver ? colorHover : "#fff"}
        fillRule="evenodd"
        d="M23.918 11.266l-5.4-5.4v3.466L5.34 9.034v3.582l13.178.321v3.729l5.4-5.4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint0_linear_3_46)"
        fillRule="evenodd"
        d="M6 20H0v14h6V20zm7.45 0h-6v14h6V20zm1.45 0h6v14h-6V20zm13.45 0h-6v14h6V20z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3_46"
          x1="0"
          x2="58.5"
          y1="34"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.275" stopColor={mouseOver ? colorHover : "#fff"}></stop>
          <stop offset="1" stopColor={mouseOver ? colorHover : "#fff"} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}