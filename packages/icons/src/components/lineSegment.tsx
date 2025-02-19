import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const LineSegment = ({ ...props }: GenericIconProps) => (
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
        d="M3.273 12.308a1.273 1.273 0 100 2.546 1.273 1.273 0 000-2.546zM1 13.581a2.273 2.273 0 114.545 0 2.273 2.273 0 01-4.545 0zM12.727 2.854a1.273 1.273 0 100 2.545 1.273 1.273 0 000-2.545zm-2.273 1.272a2.273 2.273 0 114.545 0 2.273 2.273 0 01-4.545 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.828 5.026a.5.5 0 010 .707L4.88 12.68a.5.5 0 01-.707-.708l6.947-6.947a.5.5 0 01.708 0z"
        fill="currentColor"
      />
    </svg>
);
