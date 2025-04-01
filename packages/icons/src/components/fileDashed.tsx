import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileDashed = ({ ...props }: GenericIconProps) => (
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
            d="M2.58 11.86a.5.5 0 01.5.5v2.167a.042.042 0 00.042.042h1.084a.5.5 0 110 1H3.122a1.042 1.042 0 01-1.042-1.042V12.36a.5.5 0 01.5-.5zM6.956 2.069a.5.5 0 01.5-.5h2.167a.5.5 0 01.353.146l3.792 3.792a.5.5 0 01.146.354v3.25a.5.5 0 01-1 0V6.068l-3.498-3.5h-1.96a.5.5 0 01-.5-.5zM3.122 2.569a.042.042 0 00-.042.042v1.625a.5.5 0 11-1 0V2.61a1.042 1.042 0 011.042-1.042h1.625a.5.5 0 110 1H3.122z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.622 1.569a.5.5 0 01.5.5V5.36h3.292a.5.5 0 010 1H9.622a.5.5 0 01-.5-.5V2.069a.5.5 0 01.5-.5zM13.414 11.319a.5.5 0 01.5.5v2.708a1.042 1.042 0 01-1.041 1.042h-.542a.5.5 0 110-1h.542a.042.042 0 00.042-.042V11.82a.5.5 0 01.5-.5zM2.581 6.444a.5.5 0 01.5.5v2.708a.5.5 0 11-1 0V6.944a.5.5 0 01.5-.5zM6.414 15.069a.5.5 0 01.5-.5h2.708a.5.5 0 010 1H6.914a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
