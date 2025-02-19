import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AppWindow = ({ ...props }: GenericIconProps) => (
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
            d="M14 5.853H2v9h12v-9zm-13-1v11h14v-11H1zM4 3.864H1v-1h3v1zM8 3.864H5v-1h3v1zM12 3.864H9v-1h3v1z"
            fill="currentColor"
        />
    </svg>
);
