import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Ruler = ({ ...props }: GenericIconProps) => (
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
            d="M1.5 11.585a1 1 0 010-1.414l8.293-8.293a1 1 0 011.414 0L14.5 5.17a1 1 0 010 1.414l-8.293 8.293a1 1 0 01-1.414 0L1.5 11.585zm9-9l-8.293 8.293L5.5 14.17l8.293-8.293L10.5 2.585z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.896 3.774a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.707l-2-2a.5.5 0 010-.707zM5.646 6.024a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707l-2-2a.5.5 0 010-.707zM3.396 8.274a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708z"
            fill="currentColor"
        />
    </svg>
);
