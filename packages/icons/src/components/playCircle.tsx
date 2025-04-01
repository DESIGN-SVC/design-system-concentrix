import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PlayCircle = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.138a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.681 5.53a.5.5 0 01.513.026l3.25 2.166a.5.5 0 010 .832l-3.25 2.167a.5.5 0 01-.777-.416V5.972a.5.5 0 01.264-.441zm.736 1.376V9.37l1.849-1.233-1.849-1.232z"
            fill="currentColor"
        />
    </svg>
);
