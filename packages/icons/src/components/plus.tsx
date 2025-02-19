import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Plus = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.999 4v8M12 8H4" stroke="currentColor" strokeLinecap="round" />
    </svg>
);
