import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ApplePodcastsLogo = ({ ...props }: GenericIconProps) => (
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
            d="M7 5.526a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM4.877 6.651a2.125 2.125 0 114.249 0 2.125 2.125 0 01-4.249 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.154 8.775a.583.583 0 00-.572.696l.65 3.25a.584.584 0 00.572.47h.393a.584.584 0 00.572-.47v-.002l.65-3.248a.585.585 0 00-.572-.696H6.154zm1.043 5.415h-.393a1.583 1.583 0 01-1.553-1.275l-.65-3.25a1.583 1.583 0 011.554-1.89m1.042 6.415a1.583 1.583 0 001.553-1.275l.65-3.249a1.583 1.583 0 00-1.553-1.89H6.155"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3.37a3.832 3.832 0 00-3.575 5.213.5.5 0 01-.932.36 4.832 4.832 0 119.014 0 .5.5 0 11-.932-.36A3.832 3.832 0 007 3.37z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1.19a5.998 5.998 0 00-3.224 11.057.5.5 0 01-.537.843 6.999 6.999 0 117.523 0 .5.5 0 01-.538-.843A5.998 5.998 0 007 1.19z"
            fill="currentColor"
        />
    </svg>
);
