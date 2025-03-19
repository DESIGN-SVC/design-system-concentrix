import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Aperture = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.832 1.03a.5.5 0 01.639.302l2.483 6.953a.5.5 0 01-.941.337L7.529 1.668a.5.5 0 01.303-.639z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.877 4.66a.5.5 0 01.582-.402l7.263 1.326a.5.5 0 11-.18.984L2.28 5.242a.5.5 0 01-.402-.582z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.473 5.242a.5.5 0 01.057.704l-4.78 5.628a.5.5 0 01-.762-.648L6.768 5.3a.5.5 0 01.705-.058z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.348 7.076a.5.5 0 01.639.302l2.483 6.954a.5.5 0 01-.942.336L5.045 7.715a.5.5 0 01.303-.64z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.873 9.834a.5.5 0 01.582-.402l7.264 1.326a.5.5 0 01-.18.984l-7.263-1.326a.5.5 0 01-.403-.582z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.953 4.369a.5.5 0 01.058.705L9.23 10.7a.5.5 0 11-.762-.647l4.78-5.628a.5.5 0 01.704-.057z"
            fill="currentColor"
        />
    </svg>
);
