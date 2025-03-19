import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const At = ({ ...props }: GenericIconProps) => (
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
            d="M9.068 2.358a6 6 0 103.459 9.842l.754.656A7 7 0 1115 8.262h-.01v.436c0 .255-.029.51-.084.76l-.047.21a2.347 2.347 0 01-4.358.603 3.209 3.209 0 11-.28-4.326v-.811a.5.5 0 111 0v4.025a1.347 1.347 0 002.662.293l.047-.212a2.5 2.5 0 00.06-.542V8.27c0-.034.003-.068.01-.1a6 6 0 00-4.932-5.813zM10.21 8.26a2.209 2.209 0 11-4.418 0 2.209 2.209 0 014.418 0z"
            fill="currentColor"
        />
    </svg>
);
