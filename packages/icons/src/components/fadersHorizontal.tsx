import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FadersHorizontal = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.496 9.575h7.091a.5.5 0 110 1H.497a.5.5 0 010-1zM9.454 10.075a.5.5 0 01.5-.5H13.5a.5.5 0 010 1H9.954a.5.5 0 01-.5-.5zM0 3.074a.5.5 0 01.5-.5h2.364a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM5.494 2.574H13.5a.5.5 0 010 1H5.494a.5.5 0 110-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.494.591a.5.5 0 01.5.5v3.965a.5.5 0 01-1 0V1.09a.5.5 0 01.5-.5zM9.49 7.584a.5.5 0 01.502.499l.012 3.98a.5.5 0 11-1 .003l-.012-3.98a.5.5 0 01.498-.502z"
        fill="currentColor"
      />
    </svg>
);
