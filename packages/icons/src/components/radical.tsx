import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Radical = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={10}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.325.577a.5.5 0 01.643.292L3.5 7.621 6.032.87A.5.5 0 016.5.545h7a.5.5 0 01.5.5v1.5a.5.5 0 11-1 0v-1H6.847L3.968 9.221a.5.5 0 01-.936 0l-3-8A.5.5 0 01.325.577z"
            fill="currentColor"
        />
    </svg>
);
