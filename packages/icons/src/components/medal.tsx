import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Medal = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.616A4.143 4.143 0 108 10.9a4.143 4.143 0 000-8.285zM2.857 6.759a5.143 5.143 0 1110.286 0 5.143 5.143 0 01-10.286 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4.473a2.286 2.286 0 100 4.571 2.286 2.286 0 000-4.571zM4.714 6.758a3.286 3.286 0 116.571 0 3.286 3.286 0 01-6.571 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.786 9.973a.5.5 0 01.5.5v4.643a.5.5 0 01-.723.447L8 14.282l-2.562 1.281a.5.5 0 01-.723-.447v-4.643a.5.5 0 111 0v3.834l2.062-1.031a.5.5 0 01.447 0l2.062 1.03v-3.833a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
