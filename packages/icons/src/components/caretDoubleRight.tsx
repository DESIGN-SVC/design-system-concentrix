import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretDoubleRight = ({ ...props }: GenericIconProps) => (
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
        d="M1.146 1.146a.5.5 0 01.708 0l6.5 6.5a.5.5 0 010 .708l-6.5 6.5a.5.5 0 01-.708-.708L7.293 8 1.146 1.854a.5.5 0 010-.708z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.646 1.146a.5.5 0 01.708 0l6.5 6.5a.5.5 0 010 .708l-6.5 6.5a.5.5 0 01-.708-.708L13.793 8 7.646 1.854a.5.5 0 010-.708z"
        fill="currentColor"
      />
    </svg>
);
