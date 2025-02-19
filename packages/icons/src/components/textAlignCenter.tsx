import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TextAlignCenter = ({ ...props }: GenericIconProps) => (
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
        d="M1 4.123a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM2.772 7.078a.5.5 0 01.5-.5h9.455a.5.5 0 010 1H3.272a.5.5 0 01-.5-.5zM1 10.032a.5.5 0 01.5-.5h13a.5.5 0 110 1h-13a.5.5 0 01-.5-.5zM2.772 12.987a.5.5 0 01.5-.5h9.455a.5.5 0 010 1H3.272a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
