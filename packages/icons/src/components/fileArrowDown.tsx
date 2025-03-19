import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileArrowDown = ({ ...props }: GenericIconProps) => (
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
        d="M9.622 1.569a.5.5 0 01.5.5V5.36h3.292a.5.5 0 010 1H9.622a.5.5 0 01-.5-.5V2.069a.5.5 0 01.5-.5zM5.748 10.111a.5.5 0 01.707 0l1.542 1.543L9.54 10.11a.5.5 0 01.707.707L8.35 12.714a.5.5 0 01-.707 0l-1.896-1.896a.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.997 7.527a.5.5 0 01.5.5v4.334a.5.5 0 01-1 0V8.027a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
)