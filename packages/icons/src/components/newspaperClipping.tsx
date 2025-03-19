import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const NewspaperClipping = ({ ...props }: GenericIconProps) => (
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
            d="M1.042 1.428A.042.042 0 001 1.47v10.024l1.443-.721a.5.5 0 01.447 0l1.943.971 1.943-.971a.5.5 0 01.448 0l1.943.971 1.943-.971a.5.5 0 01.447 0l1.443.721V1.47a.042.042 0 00-.042-.042H1.042zM.305.733C.5.538.765.428 1.042.428h11.916A1.042 1.042 0 0114 1.47v10.833a.5.5 0 01-.724.447l-1.943-.971-1.943.971a.5.5 0 01-.447 0L7 11.78l-1.943.971a.5.5 0 01-.447 0l-1.943-.971-1.943.971A.5.5 0 010 12.303V1.47C0 1.194.11.929.305.733z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.583 5.262a.5.5 0 01.5-.5h3.25a.5.5 0 110 1h-3.25a.5.5 0 01-.5-.5zM7.583 7.428a.5.5 0 01.5-.5h3.25a.5.5 0 110 1h-3.25a.5.5 0 01-.5-.5zM2.167 4.178a.5.5 0 01.5-.5h3.25a.5.5 0 01.5.5v4.334a.5.5 0 01-.5.5h-3.25a.5.5 0 01-.5-.5V4.178zm1 .5v3.334h2.25V4.678h-2.25z"
            fill="currentColor"
        />
    </svg>
);
