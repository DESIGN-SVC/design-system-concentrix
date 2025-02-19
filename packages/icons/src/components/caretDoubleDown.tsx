import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretDoubleDown = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.146 7.646a.5.5 0 01.708 0L8 13.793l6.146-6.147a.5.5 0 01.708.708l-6.5 6.5a.5.5 0 01-.708 0l-6.5-6.5a.5.5 0 010-.708z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.146 1.146a.5.5 0 01.708 0L8 7.293l6.146-6.147a.5.5 0 01.708.708l-6.5 6.5a.5.5 0 01-.708 0l-6.5-6.5a.5.5 0 010-.708z"
        fill="currentColor"
      />
    </svg>
);
