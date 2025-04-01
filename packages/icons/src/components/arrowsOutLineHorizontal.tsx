import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowOutLineHorizontal = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.73a.5.5 0 01.5.5v10.215a.5.5 0 01-1 0V3.23a.5.5 0 01.5-.5zM1 8.338a.5.5 0 01.5-.5h4.643a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.71 6.127a.5.5 0 010 .707L2.208 8.338 3.711 9.84a.5.5 0 11-.707.707L1.146 8.691a.5.5 0 010-.707l1.858-1.857a.5.5 0 01.707 0zM9.357 8.338a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H9.857a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.289 6.127a.5.5 0 01.707 0l1.857 1.857a.5.5 0 010 .707l-1.857 1.857a.5.5 0 11-.707-.707l1.504-1.503-1.504-1.504a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
