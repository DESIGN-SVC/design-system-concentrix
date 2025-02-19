import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsLeftRight = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.547 8.946a.5.5 0 01.707 0l2.6 2.6a.5.5 0 010 .707l-2.6 2.6a.5.5 0 01-.707-.707l2.246-2.246-2.246-2.247a.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 12zM4.454 1.146a.5.5 0 010 .708L2.207 4.1l2.247 2.246a.5.5 0 11-.708.708l-2.6-2.6a.5.5 0 010-.708l2.6-2.6a.5.5 0 01.708 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.1a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
