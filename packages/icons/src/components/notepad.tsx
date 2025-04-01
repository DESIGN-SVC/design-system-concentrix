import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Notepad = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.42 8.875a.5.5 0 01.5-.5h4.16a.5.5 0 110 1H5.92a.5.5 0 01-.5-.5zM5.42 10.956a.5.5 0 01.5-.5h4.16a.5.5 0 110 1H5.92a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.32 3.656a.02.02 0 00-.02.02v9.88a1.06 1.06 0 001.06 1.06h7.28a1.06 1.06 0 001.06-1.06v-9.88a.02.02 0 00-.006-.014.02.02 0 00-.014-.006H3.32zm-.721-.701a1.02 1.02 0 01.72-.3h9.36a1.02 1.02 0 011.02 1.02v9.88a2.06 2.06 0 01-2.06 2.06H4.36a2.06 2.06 0 01-2.06-2.06v-9.88c0-.27.108-.53.3-.72z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.88 1.616a.5.5 0 01.5.5v2.08a.5.5 0 11-1 0v-2.08a.5.5 0 01.5-.5zM8 1.616a.5.5 0 01.5.5v2.08a.5.5 0 01-1 0v-2.08a.5.5 0 01.5-.5zM11.12 1.616a.5.5 0 01.5.5v2.08a.5.5 0 11-1 0v-2.08a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
