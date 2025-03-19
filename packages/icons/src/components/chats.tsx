import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Chats = ({ ...props }: GenericIconProps) => (
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
            d="M2.042 2.794A.042.042 0 002 2.836v7.62l1.866-1.51a.5.5 0 01.314-.11h6.528a.042.042 0 00.042-.042V2.836a.042.042 0 00-.042-.042H2.042zm-.737-.695c.195-.195.46-.305.737-.305h8.666a1.042 1.042 0 011.042 1.042v5.958a1.041 1.041 0 01-1.042 1.042H4.357L1.814 11.89A.5.5 0 011 11.502V2.836c0-.277.11-.542.305-.737z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 5.543a.5.5 0 01.5-.5h2.708A1.042 1.042 0 0115 6.085v8.667a.5.5 0 01-.814.389l-2.543-2.056H5.292a1.041 1.041 0 01-1.042-1.042V9.335a.5.5 0 011 0v2.708a.042.042 0 00.042.042h6.528a.5.5 0 01.314.111L14 13.705v-7.62a.042.042 0 00-.042-.042H11.25a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
