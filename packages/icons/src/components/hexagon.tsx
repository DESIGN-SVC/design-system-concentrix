import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Hexagon = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.505.699a1.006 1.006 0 01.99 0l5.31 3.002a1.006 1.006 0 01.512.875v5.985a1.006 1.006 0 01-.511.876l-5.311 3.002a1.006 1.006 0 01-.99 0l-5.31-3.002a1.005 1.005 0 01-.511-.876V4.576a1.006 1.006 0 01.51-.875L6.505.699zm.495.87h-.003l-5.31 3.002a.006.006 0 00-.003.005v5.988l.003.002 5.31 3.002h.006l5.31-3.002c.002 0 .002 0 .003-.002V4.576v-.003l-.002-.002L7.003 1.57l.246-.436-.246.436L7 1.569z"
        fill="currentColor"
      />
    </svg>
);
