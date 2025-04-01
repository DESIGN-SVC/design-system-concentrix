import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsInLineHorizontal = ({ ...props }: GenericIconProps) => (
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
            d="M3.933 6.127a.5.5 0 01.707 0l1.857 1.857a.5.5 0 010 .707L4.64 10.548a.5.5 0 11-.707-.707l1.503-1.503-1.503-1.504a.5.5 0 010-.707zM9.357 8.338a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H9.857a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.068 6.127a.5.5 0 010 .707l-1.503 1.504 1.503 1.503a.5.5 0 11-.707.707L9.504 8.691a.5.5 0 010-.707l1.857-1.857a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
