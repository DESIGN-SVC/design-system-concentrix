import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CurrencyInd = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={15}
        viewBox="0 0 12 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.978 3.372a.5.5 0 01.5-.5h9.043a.5.5 0 110 1H1.478a.5.5 0 01-.5-.5zM.978.546a.5.5 0 01.5-.5h9.043a.5.5 0 110 1H1.478a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.521.546a.5.5 0 01.5-.5 4.174 4.174 0 010 8.348h-1.25l5.26 4.782a.5.5 0 01-.672.74L1.14 8.264a.5.5 0 01.337-.87H4.02a3.174 3.174 0 100-6.348.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
