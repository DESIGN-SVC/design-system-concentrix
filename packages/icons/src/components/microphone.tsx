import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Microphone = ({ ...props }: GenericIconProps) => (
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
        d="M8 1.378A2.273 2.273 0 005.726 3.65v4.727a2.273 2.273 0 004.545 0V3.65a2.273 2.273 0 00-2.273-2.273zM7.1 2.75a1.273 1.273 0 012.172.9v4.727a1.273 1.273 0 11-2.545 0V3.65c0-.338.134-.662.372-.9zM4.362 7.196a.5.5 0 00-1 0v1.182a4.636 4.636 0 002.65 4.19.5.5 0 00.428-.904 3.636 3.636 0 01-2.078-3.286V7.196zm8.273 0a.5.5 0 10-1 0v1.182A3.636 3.636 0 018 12.014a.5.5 0 00-.5.5v1.864H5.636a.5.5 0 000 1h4.727a.5.5 0 000-1H8.5v-1.39a4.636 4.636 0 004.136-4.61V7.196z"
        fill="currentColor"
      />
    </svg>
);
