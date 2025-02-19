import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowRight = ({ ...props }: GenericIconProps) => (
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
        d="M1 8.063a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.828 2.392a.5.5 0 01.707 0l5.318 5.318a.5.5 0 010 .707l-5.318 5.318a.5.5 0 11-.707-.707l4.965-4.965L8.828 3.1a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
);
