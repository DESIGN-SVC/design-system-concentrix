import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MegaphoneSimple = ({ ...props }: GenericIconProps) => (
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
        d="M1.855 2.569c.16-.03.323-.02.478.024L14.25 6.07a1.042 1.042 0 01.75 1v2.438a1.042 1.042 0 01-.75 1L2.333 13.982a1.042 1.042 0 01-1.333-1V3.593a1.042 1.042 0 01.855-1.024zm.198.984a.042.042 0 00-.053.04v9.39a.041.041 0 00.017.033.04.04 0 00.036.006L13.97 9.547a.042.042 0 00.03-.04V7.069a.042.042 0 00-.03-.04L2.053 3.553z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.542 4.425a.5.5 0 01.5.5v8.238a.042.042 0 00.042.041h2.166a.042.042 0 00.042-.042v-2.46a.5.5 0 111 0v2.46a1.042 1.042 0 01-1.042 1.042H9.084a1.041 1.041 0 01-1.042-1.042V4.925a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
