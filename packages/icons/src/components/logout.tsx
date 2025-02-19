import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Logout = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.997 7.01a.5.5 0 01-.146.353l-2.01 2.01a.5.5 0 01-.708-.708L12.79 7.01l-1.657-1.656a.5.5 0 11.707-.707l2.01 2.01a.5.5 0 01.147.353z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.34 7.01a.5.5 0 01-.5.5H7.834a.5.5 0 010-1h5.006a.5.5 0 01.5.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.991 1.101a.147.147 0 00-.03-.094A.053.053 0 009.955 1h-8.91a.053.053 0 00-.006.006.147.147 0 00-.03.094V12.9c0 .046.017.08.03.094a.049.049 0 00.006.006h8.91a.05.05 0 00.006-.006.147.147 0 00.03-.095v-1.802c0-.276.226-.5.505-.5.278 0 .504.224.504.5V12.9c0 .272-.095.544-.28.755a1.007 1.007 0 01-.755.346h-8.93c-.297 0-.567-.134-.754-.347A1.142 1.142 0 010 12.898V1.101C0 .83.095.557.28.347.469.134.739 0 1.036 0h8.93c.297 0 .567.134.754.347.186.21.281.482.281.754v1.803c0 .276-.226.5-.504.5a.503.503 0 01-.505-.5V1.1z"
        fill="currentColor"
      />
    </svg>
);
