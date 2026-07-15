import React from "react";

type StylizedShapeIconProps = React.SVGProps<SVGSVGElement>;

const StarIcon: React.FC<StylizedShapeIconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="currentColor">
        <path d="M100 10 L123 70 L188 80 L138 125 L150 190 L100 160 L50 190 L62 125 L12 80 L77 70 Z" />
      </g>
    </svg>
  );
};

export default StarIcon;
