import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Layout = ({ ...props }: GenericIconProps) => (
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
        d="M6.375 6.206a.5.5 0 01.5.5v7.041a.5.5 0 11-1 0V6.706a.5.5 0 01.5-.5z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.706a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.042 3.414A.042.042 0 002 3.456v9.75c0 .023.019.041.042.041h11.916a.042.042 0 00.042-.041v-9.75a.042.042 0 00-.042-.042H2.042zM1 3.456c0-.576.466-1.042 1.042-1.042h11.916c.576 0 1.042.466 1.042 1.042v9.75c0 .575-.466 1.041-1.042 1.041H2.042A1.042 1.042 0 011 13.206v-9.75z"
        fill="currentcolor"
      />
    </svg>
);
