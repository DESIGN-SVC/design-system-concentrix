import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const DotsNine = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M2 3.523a1 1 0 100-2 1 1 0 000 2zM8 3.523a1 1 0 100-2 1 1 0 000 2zM14 3.523a1 1 0 100-2 1 1 0 000 2zM2 9.523a1 1 0 100-2 1 1 0 000 2zM8 9.523a1 1 0 100-2 1 1 0 000 2zM14 9.523a1 1 0 100-2 1 1 0 000 2zM2 15.523a1 1 0 100-2 1 1 0 000 2zM8 15.523a1 1 0 100-2 1 1 0 000 2zM14 15.523a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
);
