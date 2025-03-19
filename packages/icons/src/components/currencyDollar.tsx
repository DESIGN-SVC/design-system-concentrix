import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CurrencyDollar = ({ ...props }: GenericIconProps) => (
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
        d="M8 1.046a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.629 3.425a3 3 0 012.121-.88H9a3 3 0 013 3 .5.5 0 01-1 0 2 2 0 00-2-2H6.75a2 2 0 100 4H9.5a3 3 0 010 6h-3a3 3 0 01-3-3 .5.5 0 011 0 2 2 0 002 2h3a2 2 0 000-4H6.75a3 3 0 01-2.121-5.12z"
        fill="currentColor"
      />
    </svg>
);
