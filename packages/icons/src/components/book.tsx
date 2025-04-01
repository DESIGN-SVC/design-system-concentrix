import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Book = ({ ...props }: GenericIconProps) => (
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
        d="M2.706 2.146a2.125 2.125 0 011.503-.623h9.208a.5.5 0 01.5.5v10.834a.5.5 0 01-.5.5H4.21a1.125 1.125 0 00-1.125 1.125.5.5 0 01-1 0V3.648c0-.563.224-1.104.622-1.502zm.378 10.533a2.125 2.125 0 011.125-.322h8.708V2.523H4.21a1.125 1.125 0 00-1.125 1.125v9.031z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.584 13.982a.5.5 0 01.5.5v.042h9.25a.5.5 0 010 1h-9.75a.5.5 0 01-.5-.5v-.542a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
