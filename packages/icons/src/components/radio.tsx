import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Radio = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.145a.5.5 0 01.5-.5h12.458A1.042 1.042 0 0114 4.686v7.584a1.041 1.041 0 01-1.042 1.041H1.042A1.041 1.041 0 010 12.27V4.145zm1 .5v7.625a.042.042 0 00.042.041h11.916A.042.042 0 0013 12.27V4.686a.042.042 0 00-.042-.041H1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.812.751a.5.5 0 01-.335.623L.644 4.624a.5.5 0 01-.288-.958L11.19.416a.5.5 0 01.622.335zM9.167 6.812a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zM6.5 8.478a2.667 2.667 0 115.333 0 2.667 2.667 0 01-5.333 0zM2.167 6.312a.5.5 0 01.5-.5h2.167a.5.5 0 010 1H2.667a.5.5 0 01-.5-.5zM2.167 8.478a.5.5 0 01.5-.5h2.167a.5.5 0 110 1H2.667a.5.5 0 01-.5-.5zM2.167 10.645a.5.5 0 01.5-.5h2.167a.5.5 0 010 1H2.667a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
