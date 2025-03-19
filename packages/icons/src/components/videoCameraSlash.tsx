import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const VideoCameraSlash = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.751 4.205a.5.5 0 01.249.433v5.571a.5.5 0 01-.748.434l-3.25-1.857a.5.5 0 01-.252-.434V6.495a.5.5 0 01.252-.434l3.25-1.857a.5.5 0 01.499.001zm-3.001 2.58v1.277L13 9.348V5.499l-2.25 1.286zM.827.54a.5.5 0 01.706.033l11.837 13.02a.5.5 0 11-.74.673L.793 1.246A.5.5 0 01.827.539z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.507 3.477a.5.5 0 01.5-.5h2.386a2.357 2.357 0 012.357 2.357v3.018a.5.5 0 01-1 0V5.334a1.357 1.357 0 00-1.357-1.357H6.007a.5.5 0 01-.5-.5zM1 3.977h2.497a.5.5 0 100-1H.964A.964.964 0 000 3.941v5.572a2.357 2.357 0 002.357 2.357h7.429a.965.965 0 00.964-.964.5.5 0 00-.999-.036H2.357A1.357 1.357 0 011 9.513V3.977z"
            fill="currentColor"
        />
    </svg>
);
