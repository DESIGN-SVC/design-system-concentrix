import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Camera = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.417 2.56a.5.5 0 01.416-.222h4.333a.5.5 0 01.416.223l.935 1.402h1.9A1.584 1.584 0 0115 5.545v7.58a1.583 1.583 0 01-1.583 1.583H2.583A1.584 1.584 0 011 13.125v-7.58a1.583 1.583 0 011.583-1.582h1.9l.934-1.402zm.683.778L5.166 4.74a.5.5 0 01-.416.223H2.583A.584.584 0 002 5.545v7.58a.582.582 0 00.583.583h10.834a.583.583 0 00.583-.583v-7.58a.582.582 0 00-.583-.582H11.25a.5.5 0 01-.416-.223l-.935-1.402H6.1z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 7.128a1.937 1.937 0 10-.001 3.874A1.937 1.937 0 008 7.128zM5.062 9.064a2.937 2.937 0 115.874.001 2.937 2.937 0 01-5.873 0z"
            fill="currentColor"
        />
    </svg>
);
