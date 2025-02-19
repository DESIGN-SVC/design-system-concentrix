import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Info = ({ ...props }: GenericIconProps) => (
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
        d="M8 2.33a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 7.073v5h-1v-5h1z"
        fill="currentColor"
      />
      <path
        d="M8.743 5.33a.742.742 0 11-1.485 0 .742.742 0 011.485 0z"
        fill="currentColor"
      />
    </svg>
);
