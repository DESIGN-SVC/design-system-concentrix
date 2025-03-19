import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Minus = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path d="M12 8.378H4" stroke="currentColor" strokeLinecap="round" />
    </svg>
);
