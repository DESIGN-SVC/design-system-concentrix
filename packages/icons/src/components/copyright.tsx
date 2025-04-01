import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CopyRight = ({ ...props }: GenericIconProps) => (
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
        d="M8 2.523a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.658 6.415a2.208 2.208 0 101.109 3.433.5.5 0 11.8.6 3.208 3.208 0 110-3.85.5.5 0 01-.8.6 2.208 2.208 0 00-1.109-.783z"
        fill="currentColor"
      />
    </svg>
);
