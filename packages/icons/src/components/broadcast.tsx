import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Broadcast = ({ ...props }: GenericIconProps) => (
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
        d="M8.001 6.69a1.357 1.357 0 100 2.713 1.357 1.357 0 000-2.714zM5.645 8.045a2.357 2.357 0 114.713 0 2.357 2.357 0 01-4.713 0zM5.401 4.74a.5.5 0 010 .707 3.674 3.674 0 000 5.2.5.5 0 01-.707.707 4.674 4.674 0 010-6.615.5.5 0 01.707 0zM10.601 4.74a.5.5 0 01.707-.001 4.672 4.672 0 010 6.615.5.5 0 01-.706-.707 3.673 3.673 0 000-5.2.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.76 3.098a.5.5 0 01-.001.708 5.993 5.993 0 000 8.481.5.5 0 01-.707.708 6.993 6.993 0 010-9.897.5.5 0 01.707 0zM12.24 3.098a.5.5 0 01.708 0 6.991 6.991 0 010 9.897.5.5 0 01-.707-.708 5.992 5.992 0 000-8.481.5.5 0 010-.708z"
        fill="currentColor"
      />
    </svg>
);
