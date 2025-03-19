import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Transfer = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.038 8.351A.5.5 0 01.5 8.042h13a.5.5 0 110 1H1.707l2.397 2.397a.5.5 0 11-.708.707l-3.25-3.25a.5.5 0 01-.108-.545zM0 4.21a.5.5 0 01.5-.5h11.793L9.896 1.313a.5.5 0 11.708-.707l3.25 3.25a.5.5 0 01-.354.853H.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
