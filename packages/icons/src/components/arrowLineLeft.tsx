import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowLineLeft = ({ ...props }: GenericIconProps) => (
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
        d="M3.26 8.248a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H3.76a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.202 2.808a.5.5 0 010 .707L4.47 8.248l4.733 4.734a.5.5 0 11-.707.707L3.408 8.602a.5.5 0 010-.707l5.087-5.087a.5.5 0 01.707 0zM1.5 1.53a.5.5 0 01.5.5v12.436a.5.5 0 11-1 0V2.03a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
