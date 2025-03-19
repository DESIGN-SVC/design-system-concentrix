import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Briefcase = ({ ...props }: GenericIconProps) => (
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
        d="M2.042 5.19A.042.042 0 002 5.232v8.666c0 .023.019.042.042.042h11.916a.042.042 0 00.042-.042V5.232a.042.042 0 00-.042-.042H2.042zM1 5.232c0-.576.466-1.042 1.042-1.042h11.916c.575 0 1.042.466 1.042 1.042v8.666c0 .575-.466 1.042-1.042 1.042H2.042A1.042 1.042 0 011 13.898V5.232z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.255 2.487c.297-.297.7-.464 1.12-.464h3.25a1.583 1.583 0 011.583 1.584V4.69a.5.5 0 11-1 0V3.607a.583.583 0 00-.584-.584h-3.25a.583.583 0 00-.583.584V4.69a.5.5 0 01-1 0V3.607c0-.42.167-.823.464-1.12zM14.933 8.117a.5.5 0 01-.182.683A13.44 13.44 0 018 10.607 13.44 13.44 0 011.25 8.8a.5.5 0 01.5-.866A12.44 12.44 0 008 9.607H8a12.44 12.44 0 006.25-1.673.5.5 0 01.683.183zM8 10.607h-.001v-.5l.001.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.687 7.94a.5.5 0 01.5-.5h1.625a.5.5 0 010 1H7.187a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
