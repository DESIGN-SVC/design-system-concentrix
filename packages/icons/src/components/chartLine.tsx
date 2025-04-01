import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChartLine = ({ ...props }: GenericIconProps) => (
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
        d="M1.5 2.606a.5.5 0 01.5.5V13.44h12.5a.5.5 0 110 1h-13a.5.5 0 01-.5-.5V3.106a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.876 6.027a.5.5 0 01-.047.705l-4.333 3.792a.5.5 0 01-.63.024L5.859 7.54l-4.029 3.525a.5.5 0 01-.658-.753l4.333-3.792a.5.5 0 01.63-.023l4.008 3.006 4.029-3.524a.5.5 0 01.705.047z"
        fill="currentColor"
      />
    </svg>
);
