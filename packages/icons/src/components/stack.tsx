import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Stack = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.568 9.749a.5.5 0 01.684-.18L7 12.922l5.748-3.353a.5.5 0 01.504.863l-6 3.5a.5.5 0 01-.504 0l-6-3.5a.5.5 0 01-.18-.683z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.568 6.749a.5.5 0 01.684-.18L7 9.922l5.748-3.353a.5.5 0 01.504.863l-6 3.5a.5.5 0 01-.504 0l-6-3.5a.5.5 0 01-.18-.683z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.748.069a.5.5 0 01.504 0l6 3.5a.5.5 0 010 .863l-6 3.5a.5.5 0 01-.504 0l-6-3.5a.5.5 0 010-.863l6-3.5zM1.992 4L7 6.922 12.008 4 7 1.08 1.992 4z"
        fill="currentColor"
      />
    </svg>
);
