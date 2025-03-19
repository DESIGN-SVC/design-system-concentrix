import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowSquareIn = ({ ...props }: GenericIconProps) => (
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
        d="M1.889 9.318a.5.5 0 01.5-.5h4.43a.5.5 0 01.5.5v4.431a.5.5 0 11-1 0V9.82H2.39a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.17 8.967a.5.5 0 010 .707l-5.316 5.318a.5.5 0 01-.708-.708l5.318-5.317a.5.5 0 01.707 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.094 1.458a1.09 1.09 0 01.771-.32H13.91a1.09 1.09 0 011.09 1.091v10.044a1.09 1.09 0 01-1.09 1.09h-3.545a.5.5 0 010-1h3.545a.09.09 0 00.09-.09V2.229a.09.09 0 00-.09-.09H3.865a.09.09 0 00-.09.09v3.545a.5.5 0 11-1 0V2.229c0-.29.114-.567.319-.771z"
        fill="currentColor"
      />
    </svg>
);
