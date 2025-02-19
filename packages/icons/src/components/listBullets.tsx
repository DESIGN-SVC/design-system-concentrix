import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ListBullets = ({ ...props }: GenericIconProps) => (
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
        d="M4.857 4.34a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H5.357a.5.5 0 01-.5-.5zM4.857 8.91a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H5.357a.5.5 0 01-.5-.5zM4.857 13.482a.5.5 0 01.5-.5H14.5a.5.5 0 010 1H5.357a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        d="M2 4.854a.5.5 0 100-1 .5.5 0 000 1zM2 13.854a.5.5 0 100-1 .5.5 0 000 1zM2 9.282a.5.5 0 100-1 .5.5 0 000 1z"
        fill="currentColor"
      />
    </svg>
);
