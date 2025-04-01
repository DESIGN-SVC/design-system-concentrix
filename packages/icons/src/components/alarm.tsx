import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Alarm = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.366a.5.5 0 01.5.5v3.075h3.075a.5.5 0 010 1H8a.5.5 0 01-.5-.5V4.866a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.324a5.118 5.118 0 100 10.235A5.118 5.118 0 008 3.324zM1.881 8.44a6.118 6.118 0 1112.235 0 6.118 6.118 0 01-12.235 0zM11.98 1.588a.5.5 0 01.707 0l2.166 2.167a.5.5 0 01-.707.707L11.98 2.295a.5.5 0 010-.707zM4.02 1.588a.5.5 0 010 .707L1.854 4.462a.5.5 0 11-.708-.707l2.167-2.167a.5.5 0 01.707 0z"
        fill="currentColor"
      />
    </svg>
);
