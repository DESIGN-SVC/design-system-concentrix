import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Power = ({ ...props }: GenericIconProps) => (
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
            d="M7.999 1.296a.5.5 0 01.5.5V7.41a.5.5 0 11-1 0V1.796a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.873 1.983a.5.5 0 01-.146.692 6 6 0 106.546 0 .5.5 0 11.545-.838 7 7 0 11-7.636 0 .5.5 0 01.691.146z"
            fill="currentColor"
        />
    </svg>
);
