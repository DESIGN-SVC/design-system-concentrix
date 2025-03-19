import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Headset = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .569a6.5 6.5 0 016.546 6.5v3.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-2.5a1.5 1.5 0 011.5-1.5h1.477a5.501 5.501 0 00-5.519-5h-.007a5.5 5.5 0 00-5.52 5h1.478a1.5 1.5 0 011.5 1.5v2.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-3.5a6.5 6.5 0 016.546-6.5zm-5.545 7v3a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-2.5a.5.5 0 00-.5-.5h-1.5zm11.091 0h-1.5a.5.5 0 00-.5.5v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.046 10.069a.5.5 0 01.5.5v1.5a2.5 2.5 0 01-2.5 2.5h-3.59a.5.5 0 110-1h3.59a1.5 1.5 0 001.5-1.5v-1.5a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
