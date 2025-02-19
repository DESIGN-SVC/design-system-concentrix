import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileMagnifyingGlass = ({ ...props }: GenericIconProps) => (
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
            d="M3.122 2.569a.042.042 0 00-.042.042v11.916a.042.042 0 00.042.042h9.75a.041.041 0 00.042-.042v-8.46L9.415 2.57H3.122zm-.737-.695c.196-.195.46-.305.737-.305h6.5a.5.5 0 01.354.146l3.791 3.792a.5.5 0 01.147.354v8.666a1.04 1.04 0 01-1.042 1.042h-9.75a1.042 1.042 0 01-1.042-1.042V2.611c0-.277.11-.542.305-.737z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.622 1.569a.5.5 0 01.5.5V5.36h3.292a.5.5 0 010 1H9.622a.5.5 0 01-.5-.5V2.069a.5.5 0 01.5-.5zM8.713 10.91a.5.5 0 01.707 0l1.083 1.083a.5.5 0 11-.707.708l-1.083-1.084a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.726 8.527a1.396 1.396 0 100 2.792 1.396 1.396 0 000-2.792zM5.33 9.923a2.396 2.396 0 114.792 0 2.396 2.396 0 01-4.792 0z"
            fill="currentColor"
        />
    </svg>
);
