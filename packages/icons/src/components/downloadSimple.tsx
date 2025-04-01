import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const DownloadSimple = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.544 6.318a.5.5 0 01.707 0L8 9.066l2.748-2.748a.5.5 0 11.708.707l-3.103 3.101a.5.5 0 01-.707 0L4.544 7.025a.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a.5.5 0 01.5.5v8.27a.5.5 0 11-1 0V1.5A.5.5 0 018 1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 9.273a.5.5 0 01.5.5v4.136a.091.091 0 00.09.091h11.82a.091.091 0 00.09-.09V9.772a.5.5 0 011 0v4.136A1.09 1.09 0 0113.91 15H2.09A1.09 1.09 0 011 13.91V9.772a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
