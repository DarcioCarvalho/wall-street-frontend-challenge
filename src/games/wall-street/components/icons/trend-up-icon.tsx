import { mouseOutParent, mouseOverParent } from "@/games/utils/mouseUtils";
import { useEffect, useRef, useState } from "react";

interface TrendUpIconProps {
  colorHover?: string;
}

export function TrendUpIcon({ colorHover = "#FFF" }: TrendUpIconProps) {

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
      width="30"
      height="31"
      fill="none"
      viewBox="0 0 30 31"
      ref={svgRef}
    >
      <path
        fill={mouseOver ? colorHover : "#fff"}
        fillRule="evenodd"
        d="M21.455 0h7.636v7.636L26.454 5l-9.545 9.09-2.525-2.524-9.475 8.343-2.727-3L14.546 6.636l2.433 2.434 6.926-6.62L21.455 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint0_linear_2_35)"
        fillRule="evenodd"
        d="M27.818 10.636H22V31h5.818V10.636zm-13.09 5.819h5.818V31h-5.819V16.454zm-1.455 2.909H7.455V31h5.818V19.364zM6 23H.182v8H6v-8z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2_35"
          x1="0"
          x2="58.5"
          y1="31"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.275" stopColor={mouseOver ? colorHover : "#fff"}></stop>
          <stop offset="1" stopColor={mouseOver ? colorHover : "#fff"} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}