import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CurrencyGbp = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.548 7.665a.5.5 0 01.5-.5h6.19a.5.5 0 110 1h-6.19a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.35 1.265a2.866 2.866 0 00-1.11-.22h-.002a2.905 2.905 0 00-2.904 2.906v6.81c0 .853-.333 1.673-.926 2.285h7.545a.5.5 0 110 1H1.048a.5.5 0 010-1 2.286 2.286 0 002.286-2.286V3.95A3.905 3.905 0 017.237.047"
        fill="currentColor"
      />
    </svg>
);
