import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Newspaper = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={11}
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4.616a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM5 6.616a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.293.909A1 1 0 013 .616h10a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-11a.5.5 0 110-1 .5.5 0 00.5-.5v-7.5a1 1 0 01.293-.707zm.621 8.707H12.5a.5.5 0 00.5-.5v-7.5H3v7.5c0 .172-.03.34-.086.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 2.616a.5.5 0 01.5.5v6a.5.5 0 00.5.5.5.5 0 110 1 1.5 1.5 0 01-1.5-1.5v-6a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
