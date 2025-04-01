import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CurrencyCircleDollar= ({ ...props }: GenericIconProps) => (
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
        d="M8 4.241a.5.5 0 01.5.5v1.08a.5.5 0 01-1 0V4.74a.5.5 0 01.5-.5zM8 10.716a.5.5 0 01.5.5v1.08a.5.5 0 01-1 0v-1.08a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.543a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19 6.32a.849.849 0 100 1.698h1.62a1.849 1.849 0 110 3.698H6.38a.5.5 0 110-1H8.81a.849.849 0 100-1.698H7.191a1.849 1.849 0 010-3.697h2.428a.5.5 0 010 1H7.19z"
        fill="currentColor"
      />
    </svg>
);
