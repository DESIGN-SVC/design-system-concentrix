import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Placeholder = ({ ...props }: GenericIconProps) => (
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
        d="M2.09 2.138A.09.09 0 002 2.23v11.818c0 .05.04.091.09.091h11.82c.05 0 .09-.04.09-.09V2.228a.09.09 0 00-.09-.09H2.09zM1 2.23c0-.602.488-1.09 1.09-1.09h11.82c.602 0 1.09.488 1.09 1.09v11.818a1.09 1.09 0 01-1.09 1.091H2.09A1.09 1.09 0 011 14.048V2.228z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.32 1.458a.5.5 0 01.706 0L14.68 14.112a.5.5 0 01-.707.707L1.32 2.165a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
);
