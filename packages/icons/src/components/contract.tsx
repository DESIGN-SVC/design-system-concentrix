import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Contract
 = ({ ...props }: GenericIconProps) => (
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
        d="M1.008 4.023a2.5 2.5 0 012.5-2.5H9.82a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-2.5 2.5H3.508a2.5 2.5 0 01-2.5-2.5v-9zm2.5-1.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5H9.82a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5H3.508z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.492 8.912h-1.613v-1h1.613a1.5 1.5 0 011.5 1.5v3.61a2.5 2.5 0 01-2.5 2.5H7.465v-1h5.027a1.5 1.5 0 001.5-1.5v-3.61a.5.5 0 00-.5-.5zM3.691 6.942a.5.5 0 01.5-.5h4.945a.5.5 0 010 1H4.191a.5.5 0 01-.5-.5zM3.691 8.412a.5.5 0 01.5-.5h4.945a.5.5 0 010 1H4.191a.5.5 0 01-.5-.5zM3.691 9.881a.5.5 0 01.5-.5h2.473a.5.5 0 010 1H4.19a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
