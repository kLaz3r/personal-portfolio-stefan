import React from "react";

interface ApertureIconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
}

const ApertureIcon: React.FC<ApertureIconProps> = ({
    width = 1344,
    height = 1344,
    color = "#1E1E1E",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 1344 1344"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <g>
                <path
                    d="M855.74 700.028L1239.013 315.944C1151.889 178.136 1016.081 74.199 855.741 28.379V700.028Z"
                    fill={color}
                />
                <path
                    d="M1259.376 345.288L784.823 820.845h542.615C1338.26 772.963 1344 723.157 1344 672.001c0-118.594-30.74-229.983-84.624-326.713Z"
                    fill={color}
                />
                <path
                    d="M642.987 856.126l380.252 387.289c140.805-86.988 247.111-224.498 293.59-387.289H642.987Z"
                    fill={color}
                />
                <path
                    d="M16.561 525.028C5.739 572.91 0 622.715 0 673.869c0 119.305 31.108 231.326 85.598 328.452L559.342 525.028H16.561Z"
                    fill={color}
                />
                <path
                    d="M695.74 488.659L312.922 104.059C174.259 191.177 69.65 327.537 23.639 488.659H695.74Z"
                    fill={color}
                />
                <path
                    d="M520.064 785.177v542.254c47.86 10.823 97.644 16.569 148.776 16.569 115.951 0 225.046-29.387 320.236-81.123L520.064 785.177Z"
                    fill={color}
                />
                <path
                    d="M486.231 648.008l-382.218 385.08c87.167 136.971 222.536 240.245 382.218 285.876V648.008Z"
                    fill={color}
                />
                <path
                    d="M818.575 559.249V16.569C770.714 5.746 720.93 0 669.798 0c-117.766 0-228.426 30.353-324.666 83.603l473.443 475.646Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};

export default ApertureIcon;
