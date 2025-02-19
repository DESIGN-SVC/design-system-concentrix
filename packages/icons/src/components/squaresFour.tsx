import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SquareFour = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H2v4h4V2zM1 1v6h6V1H1zM6 10H2v4h4v-4zM1 9v6h6V9H1zM14 2h-4v4h4V2zM9 1v6h6V1H9zM14 10h-4v4h4v-4zM9 9v6h6V9H9z"
        fill="currentColor"
      />
    </svg>
);
