import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShoppingCart = ({ ...props }: GenericIconProps) => (
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
            d="M1 2.023a.5.5 0 01.5-.5h1.173a1.02 1.02 0 011.004.837l1.738 9.563h7.005a.5.5 0 010 1H4.998a.5.5 0 01-.492-.41L2.693 2.538l.492-.09-.492.09a.02.02 0 00-.02-.016H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.66 12.923a.8.8 0 100 1.6.8.8 0 000-1.6zm-1.8.8a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0zM12.42 12.923a.8.8 0 100 1.6.8.8 0 000-1.6zm-1.8.8a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0zM3.08 4.623a.5.5 0 01.5-.5H14.5a.5.5 0 01.492.59l-.79 4.346a1.54 1.54 0 01-1.515 1.264H4.526a.5.5 0 110-1h8.16a.54.54 0 00.532-.443l.683-3.757H3.581a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
