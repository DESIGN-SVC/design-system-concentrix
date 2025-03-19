import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowLeft = ({ ...props }: GenericIconProps) => (
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
        d="M1 8.349a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.172 2.677a.5.5 0 010 .707L2.207 8.35l4.965 4.965a.5.5 0 11-.707.707L1.146 8.702a.5.5 0 010-.707l5.319-5.318a.5.5 0 01.707 0z"
        fill="currentColor"
      />
    </svg>
);
