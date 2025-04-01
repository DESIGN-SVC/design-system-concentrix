import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const File = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.482 1.569C2.664 1.569 2 2.24 2 3.069v11c0 .828.664 1.5 1.482 1.5h9.036c.818 0 1.482-.672 1.482-1.5V5.576l-3.96-4.007H3.482zm-.494 1.5c0-.276.221-.5.494-.5H9.06v2.5c0 .828.663 1.5 1.482 1.5h2.47v7.5c0 .276-.22.5-.493.5H3.482a.497.497 0 01-.494-.5v-11zm9.607 2.5L10.047 2.99v2.079c0 .276.221.5.494.5h2.054z"
            fill="currentColor"
        />
    </svg>
);
