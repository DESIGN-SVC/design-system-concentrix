import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CornersOut = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75.5a.5.5 0 01.5-.5h3.25a.5.5 0 01.5.5v3.25a.5.5 0 01-1 0V1h-2.75a.5.5 0 01-.5-.5zM.5 9.75a.5.5 0 01.5.5V13h2.75a.5.5 0 010 1H.5a.5.5 0 01-.5-.5v-3.25a.5.5 0 01.5-.5zM13.5 9.75a.5.5 0 01.5.5v3.25a.5.5 0 01-.5.5h-3.25a.5.5 0 010-1H13v-2.75a.5.5 0 01.5-.5zM0 .5A.5.5 0 01.5 0h3.25a.5.5 0 010 1H1v2.75a.5.5 0 01-1 0V.5z"
        fill="currentColor"
      />
    </svg>
);
