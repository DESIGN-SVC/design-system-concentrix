import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsOut = ({ ...props }: GenericIconProps) => (
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
        d="M10.75 1.819a.5.5 0 01.5-.5h3.25a.5.5 0 01.5.5v3.25a.5.5 0 01-1 0v-2.75h-2.75a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.854 1.465a.5.5 0 010 .707l-4.55 4.55a.5.5 0 11-.707-.707l4.55-4.55a.5.5 0 01.707 0zM1.5 11.069a.5.5 0 01.5.5v2.75h2.75a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5v-3.25a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.404 9.915a.5.5 0 010 .708l-4.55 4.55a.5.5 0 11-.708-.707l4.55-4.55a.5.5 0 01.708 0zM14.5 11.069a.5.5 0 01.5.5v3.25a.5.5 0 01-.5.5h-3.25a.5.5 0 110-1H14v-2.75a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.597 9.915a.5.5 0 01.707 0l4.55 4.55a.5.5 0 11-.707.707l-4.55-4.55a.5.5 0 010-.707zM1 1.819a.5.5 0 01.5-.5h3.25a.5.5 0 010 1H2v2.75a.5.5 0 01-1 0v-3.25z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.146 1.465a.5.5 0 01.708 0l4.55 4.55a.5.5 0 11-.708.707l-4.55-4.55a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
);
