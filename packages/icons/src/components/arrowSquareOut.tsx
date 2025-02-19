import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowSquareOut = ({ ...props }: GenericIconProps) => (
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
        d="M9.568 1.638a.5.5 0 01.5-.5H14.5a.5.5 0 01.5.5V6.07a.5.5 0 01-1 0V2.14h-3.932a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.851 1.287a.5.5 0 010 .707L9.533 7.312a.5.5 0 01-.707-.707l5.318-5.318a.5.5 0 01.707 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.09 4.502a.09.09 0 00-.09.09v9.455a.091.091 0 00.09.091h9.456a.09.09 0 00.09-.09V9.32a.5.5 0 111 0v4.727a1.091 1.091 0 01-1.09 1.091H2.09A1.09 1.09 0 011 14.048V4.592a1.09 1.09 0 011.09-1.091h4.728a.5.5 0 010 1H2.091z"
        fill="currentColor"
      />
    </svg>
);
