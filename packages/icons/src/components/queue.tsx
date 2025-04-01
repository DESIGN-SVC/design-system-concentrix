import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Queue = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={11}
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.334a.5.5 0 01.5-.5h11.44a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM0 5.495a.5.5 0 01.5-.5h6.24a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM0 9.654a.5.5 0 01.5-.5h6.24a.5.5 0 110 1H.5a.5.5 0 01-.5-.5zM9.097 4.537a.5.5 0 01.508.014l4.16 2.6a.5.5 0 010 .848l-4.16 2.6a.5.5 0 01-.765-.424v-5.2a.5.5 0 01.257-.438zm.743 1.34v3.395l2.716-1.697L9.84 5.877z"
            fill="currentColor"
        />
    </svg>
);
