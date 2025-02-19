import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Playlist = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={12}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.198a.5.5 0 01.5-.5h11.44a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM0 5.358a.5.5 0 01.5-.5h7.8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM0 9.518a.5.5 0 01.5-.5h4.68a.5.5 0 110 1H.5a.5.5 0 01-.5-.5zM9.34 8.458a1.06 1.06 0 100 2.12 1.06 1.06 0 000-2.12zm-2.06 1.06a2.06 2.06 0 114.12 0 2.06 2.06 0 01-4.12 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.602 3.917a.5.5 0 01.442-.078l2.6.78a.5.5 0 11-.287.958L11.4 4.99v4.528a.5.5 0 01-1 0v-5.2a.5.5 0 01.202-.4z"
            fill="currentColor"
        />
    </svg>
);
