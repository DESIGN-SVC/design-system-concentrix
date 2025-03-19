import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MathOperations = ({ ...props }: GenericIconProps) => (
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
        d="M1 12.457a.5.5 0 01.5-.5h4.727a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.863 9.593a.5.5 0 01.5.5v4.727a.5.5 0 11-1 0v-4.727a.5.5 0 01.5-.5zM1 4.184a.5.5 0 01.5-.5h4.727a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5zM9.272 11.282a.5.5 0 01.5-.5H14.5a.5.5 0 110 1H9.772a.5.5 0 01-.5-.5zM9.272 13.63a.5.5 0 01.5-.5H14.5a.5.5 0 110 1H9.772a.5.5 0 01-.5-.5zM14.262 2.058a.5.5 0 010 .707L10.717 6.31a.5.5 0 11-.707-.707l3.545-3.545a.5.5 0 01.707 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.01 2.058a.5.5 0 01.707 0l3.545 3.545a.5.5 0 11-.707.707L10.01 2.765a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
);
