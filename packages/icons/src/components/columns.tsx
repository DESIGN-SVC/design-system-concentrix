import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Columns = ({ ...props }: GenericIconProps) => (
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
            d="M6 5.523H2v9h4v-9zm-5-1v11h6v-11H1zM14 5.523h-4v9h4v-9zm-5-1v11h6v-11H9zM4 3.534H1v-1h3v1zM12 3.534H9v-1h3v1z"
            fill="currentColor"
        />
    </svg>
);
