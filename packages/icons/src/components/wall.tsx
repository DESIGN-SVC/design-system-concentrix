import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Wall = ({ ...props }: GenericIconProps) => (
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
            d="M7 .048H.5a.5.5 0 00-.5.5v9.75a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V.548a.5.5 0 00-.5-.5H7zm6 3.25H7.5v-2.25H13v2.25zm0 1v2.25h-2.25v-2.25H13zm0 3.25H7.5v2.25H13v-2.25zm-6.5 2.25v-2.25H1v2.25h5.5zM1 6.548h2.25v-2.25H1v2.25zm0-3.25h5.5v-2.25H1v2.25zm8.75 1v2.25h-5.5v-2.25h5.5z"
            fill="currentColor"
        />
    </svg>
);
