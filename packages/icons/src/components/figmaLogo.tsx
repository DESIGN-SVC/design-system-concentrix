import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FigmaLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.167 6.524a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zM7.5 8.19a2.667 2.667 0 115.333 0 2.667 2.667 0 01-5.333 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.947 1.971c.5-.5 1.178-.78 1.886-.78h2.166a.5.5 0 01.5.5v4.333a.5.5 0 01-.5.5H5.833A2.667 2.667 0 013.947 1.97zm1.886.22a1.667 1.667 0 100 3.333h1.666V2.19H5.833z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.947 6.305c.5-.5 1.178-.781 1.886-.781h2.166a.5.5 0 01.5.5v4.333a.5.5 0 01-.5.5H5.833a2.667 2.667 0 01-1.886-4.552zm1.886.219a1.667 1.667 0 100 3.333h1.666V6.524H5.833z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 1.69a.5.5 0 01.5-.5h2.167a2.667 2.667 0 010 5.334H8a.5.5 0 01-.5-.5V1.69zm1 .5v3.334h1.667a1.667 1.667 0 000-3.334H8.5zM5.833 10.857a1.667 1.667 0 101.666 1.667v-1.667H5.833zm-1.482-.55c.439-.294.954-.45 1.482-.45h2.166a.5.5 0 01.5.5v2.167a2.667 2.667 0 11-4.148-2.218z"
            fill="currentColor"
        />
    </svg>
);
