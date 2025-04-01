import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CopySimple = ({ ...props }: GenericIconProps) => (
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
        d="M3.363 2.023a.5.5 0 01.5-.5H14.5a.5.5 0 01.5.5v10.636a.5.5 0 11-1 0V2.523H3.863a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.387a.5.5 0 01.5-.5h10.637a.5.5 0 01.5.5v10.636a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5V4.387zm1 .5v9.636h9.637V4.887H2z"
        fill="currentColor"
      />
    </svg>
);
