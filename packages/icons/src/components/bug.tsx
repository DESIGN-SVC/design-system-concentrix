import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Bug = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M9.57 6.59a.56.56 0 100-1.121.56.56 0 000 1.12zM6.431 6.59a.56.56 0 100-1.121.56.56 0 000 1.12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7.546a.5.5 0 01.5.5v5.38a.5.5 0 01-1 0v-5.38a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.046a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.167A3.983 3.983 0 004.018 7.15v1.793a3.983 3.983 0 107.965 0V7.15A3.983 3.983 0 008 3.167zm-3.523.46a4.983 4.983 0 018.506 3.523v1.793a4.983 4.983 0 01-9.965 0V7.15c0-1.322.525-2.59 1.459-3.524z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.78 10.229a.5.5 0 01.683-.183l1.61.93a.5.5 0 01-.5.865l-1.61-.93a.5.5 0 01-.183-.682zM14.257 4.434a.5.5 0 01-.184.683l-1.61.93a.5.5 0 11-.5-.866l1.61-.93a.5.5 0 01.684.183zM1.744 4.434a.5.5 0 01.683-.183l1.61.93a.5.5 0 11-.5.866l-1.61-.93a.5.5 0 01-.183-.683zM4.22 10.229a.5.5 0 01-.183.683l-1.61.93a.5.5 0 11-.5-.867l1.61-.93a.5.5 0 01.683.184z"
        fill="currentColor"
      />
    </svg>
);
