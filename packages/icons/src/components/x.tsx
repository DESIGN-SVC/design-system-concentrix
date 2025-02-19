import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const X = ({ ...props }: GenericIconProps) => (
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
            d="M14.552 3.003a.464.464 0 00-.657-.657L8.188 8.054 2.48 2.346a.464.464 0 10-.657.657L7.531 8.71l-5.708 5.708a.464.464 0 10.657.657l5.707-5.708 5.708 5.707a.464.464 0 00.657-.656L8.844 8.71l5.708-5.707z"
            fill="currentColor"
        />
    </svg>
);
