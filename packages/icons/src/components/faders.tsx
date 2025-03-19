import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Faders = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5.527a.5.5 0 01.5.5v6.5a.5.5 0 01-1 0v-6.5a.5.5 0 01.5-.5zM7 .11a.5.5 0 01.5.5v3.25a.5.5 0 11-1 0V.61a.5.5 0 01.5-.5zM11.875 10.944a.5.5 0 01.5.5v1.083a.5.5 0 01-1 0v-1.083a.5.5 0 01.5-.5zM11.875.11a.5.5 0 01.5.5v8.667a.5.5 0 01-1 0V.611a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 9.277a.5.5 0 01.5-.5h3.25a.5.5 0 010 1h-3.25a.5.5 0 01-.5-.5zM2.125 8.777a.5.5 0 01.5.5v3.25a.5.5 0 11-1 0v-3.25a.5.5 0 01.5-.5zM2.125.11a.5.5 0 01.5.5v6.5a.5.5 0 01-1 0V.61a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.11a.5.5 0 01.5-.5h3.25a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM4.875 3.86a.5.5 0 01.5-.5h3.25a.5.5 0 010 1h-3.25a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
