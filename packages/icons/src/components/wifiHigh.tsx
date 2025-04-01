import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const WifiHigh = ({ ...props }: GenericIconProps) => (
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
            d="M6.647 10.762l1.356 1.518 1.356-1.518a3.187 3.187 0 00-2.712 0zm-1.068-.529a4.187 4.187 0 014.849 0 .5.5 0 01.083.74l-2.135 2.39a.5.5 0 01-.746 0l-2.135-2.39a.5.5 0 01.084-.74zM8.024 7.388c-1.463 0-2.88.513-4.005 1.45a.5.5 0 11-.64-.77 7.258 7.258 0 019.29 0 .5.5 0 01-.64.77 6.258 6.258 0 00-4.005-1.45z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4.316a9.33 9.33 0 00-6.17 2.331.5.5 0 01-.66-.75 10.33 10.33 0 0113.66 0 .5.5 0 11-.66.75A9.33 9.33 0 008 4.317z"
            fill="currentColor"
        />
    </svg>
);
