import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Play = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.524.27A1.06 1.06 0 012.58.288l9.925 5.958a1.046 1.046 0 01.507.891 1.035 1.035 0 01-.507.891L2.58 13.987a1.058 1.058 0 01-1.45-.36 1.034 1.034 0 01-.147-.53V1.18a1.034 1.034 0 01.54-.91zm.512.868a.06.06 0 00-.03.007.047.047 0 00-.018.017.034.034 0 00-.005.018v11.917c0 .005.002.011.005.017.004.006.01.012.018.017a.06.06 0 00.06-.001l9.925-5.958a.047.047 0 00.016-.017.034.034 0 00.005-.017.034.034 0 00-.005-.017.047.047 0 00-.016-.016L2.065 1.146a.059.059 0 00-.029-.008z"
            fill="currentColor"
        />
    </svg>
);
