import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SortDescending = ({ ...props }: GenericIconProps) => (
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
        d="M11.192 2.85a.5.5 0 01.707 0l2.954 2.953a.5.5 0 11-.707.707l-2.6-2.6-2.602 2.6a.5.5 0 01-.707-.706l2.955-2.955z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.546 2.703a.5.5 0 01.5.5v7.09a.5.5 0 01-1 0v-7.09a.5.5 0 01.5-.5zM1 9.112a.5.5 0 01.5-.5h5.318a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5zM1 4.384a.5.5 0 01.5-.5h4.136a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5zM1 13.839a.5.5 0 01.5-.5h10.045a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
