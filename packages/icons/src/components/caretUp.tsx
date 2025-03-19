import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretUp = ({ ...props }: GenericIconProps) => (
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
        d="M7.646 4.92a.5.5 0 01.708 0l6.5 6.5a.5.5 0 01-.708.707L8 5.981l-6.146 6.146a.5.5 0 01-.708-.707l6.5-6.5z"
        fill="currentColor"
      />
    </svg>
);
