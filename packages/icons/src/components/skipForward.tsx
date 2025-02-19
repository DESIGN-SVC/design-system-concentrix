import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SkipForward = ({ ...props }: GenericIconProps) => (
    <svg
        width={12}
        height={14}
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.229 12.525a.09.09 0 00.092-.001l8.912-5.447a.09.09 0 00.032-.122.09.09 0 00-.032-.033L1.32 1.476a.09.09 0 00-.139.077v10.893a.09.09 0 00.047.08zm.065 1.012a1.091 1.091 0 01-1.112-1.09V1.552a1.09 1.09 0 011.66-.93l8.912 5.446a1.09 1.09 0 010 1.862l-8.912 5.446a1.091 1.091 0 01-.548.16z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.318 14a.5.5 0 01-.5-.5V.5a.5.5 0 111 0v13a.5.5 0 01-.5.5z"
            fill="currentColor"
        />
    </svg>
);
