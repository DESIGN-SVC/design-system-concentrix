import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MagicWand = ({ ...props }: GenericIconProps) => (
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
        d="M13 8.116a.5.5 0 01.5.5v3a.5.5 0 11-1 0v-3a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 10.116a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4.75 2.616a.5.5 0 01.5.5v2.5a.5.5 0 11-1 0v-2.5a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.366a.5.5 0 01.5-.5H6a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5zM10 11.616a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 13.116a.5.5 0 01.5-.5h2a.5.5 0 010 1H9a.5.5 0 01-.5-.5zM1.5 13.323a1 1 0 010-1.414l9.293-9.293a1 1 0 011.414 0L13.5 3.909a1 1 0 010 1.414l-9.293 9.293a1 1 0 01-1.414 0L1.5 13.323zm10-10l-9.293 9.293L3.5 13.909l9.293-9.293L11.5 3.323z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.146 5.262a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.707l-2-2a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
);
