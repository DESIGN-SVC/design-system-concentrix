import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsOutSimple = ({ ...props }: GenericIconProps) => (
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
        d="M6.729 9.887a.5.5 0 010 .707l-4.022 4.022H5.68a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5v-4.179a.5.5 0 011 0v2.972l4.021-4.022a.5.5 0 01.708 0zM9.937 2.116a.5.5 0 01.5-.5H14.5a.5.5 0 01.5.5v4.062a.5.5 0 01-1 0V3.323L9.979 7.344a.5.5 0 11-.708-.707l4.022-4.021h-2.855a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
