import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Paperclip = ({ ...props }: GenericIconProps) => (
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
            d="M8.968 2.065a2.741 2.741 0 113.877 3.877L6.24 12.546a1.62 1.62 0 01-2.292-2.292l6.604-6.604a.5.5 0 11.707.707L4.656 10.96a.62.62 0 00.878.877l6.603-6.603a1.741 1.741 0 10-2.462-2.463L3.07 9.376a2.862 2.862 0 004.047 4.047l6.797-6.796a.5.5 0 01.707.707L7.826 14.13A3.862 3.862 0 112.364 8.67l6.604-6.604z"
            fill="currentColor"
        />
    </svg>
);
