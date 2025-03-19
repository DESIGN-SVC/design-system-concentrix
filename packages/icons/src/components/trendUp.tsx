import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TrendUp = ({ ...props }: GenericIconProps) => (
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
        d="M14.854 4.215a.5.5 0 010 .707l-6 6a.5.5 0 01-.708 0L6 8.776l-4.146 4.146a.5.5 0 11-.708-.707l4.5-4.5a.5.5 0 01.708 0L8.5 9.862l5.646-5.647a.5.5 0 01.708 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.569a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-3.5h-3.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
