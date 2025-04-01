import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FastForwardCircle = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1.569a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.785 4.962a.5.5 0 01.513.024l3.25 2.167a.5.5 0 010 .832l-3.25 2.167a.5.5 0 01-.777-.416V5.402a.5.5 0 01.264-.44zm.736 1.375V8.8L6.369 7.57 4.521 6.337z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.577 4.962a.5.5 0 01.513.024l3.25 2.167a.5.5 0 010 .832l-3.25 2.167a.5.5 0 01-.777-.416V5.402a.5.5 0 01.264-.44zm.736 1.375V8.8L10.16 7.57 8.313 6.337z"
            fill="currentColor"
        />
    </svg>
);
