import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CursorText = ({ ...props }: GenericIconProps) => (
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
        d="M10.6 2.569a2.1 2.1 0 00-2.1 2.1v7.8a2.1 2.1 0 002.1 2.1h1.3a.5.5 0 010 1h-1.3a3.1 3.1 0 01-3.1-3.1v-7.8a3.1 3.1 0 013.1-3.1h1.3a.5.5 0 010 1h-1.3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 2.069a.5.5 0 01.5-.5h1.3a3.1 3.1 0 013.1 3.1v7.8a3.1 3.1 0 01-3.1 3.1H4.1a.5.5 0 110-1h1.3a2.1 2.1 0 002.1-2.1v-7.8a2.1 2.1 0 00-2.1-2.1H4.1a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.55 8.569a.5.5 0 01.5-.5h3.9a.5.5 0 010 1h-3.9a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
