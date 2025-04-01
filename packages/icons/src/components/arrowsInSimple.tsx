import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsInSimple = ({ ...props }: GenericIconProps) => (
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
        d="M14.854 1.524a.5.5 0 010 .707l-4.022 4.022h2.972a.5.5 0 110 1H9.625a.5.5 0 01-.5-.5V2.574a.5.5 0 111 0v2.972l4.021-4.022a.5.5 0 01.708 0zM1.812 10.003a.5.5 0 01.5-.5h4.063a.5.5 0 01.5.5v4.062a.5.5 0 11-1 0V11.21l-4.021 4.021a.5.5 0 01-.708-.707l4.022-4.021H2.312a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
