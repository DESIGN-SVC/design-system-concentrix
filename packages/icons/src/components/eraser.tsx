import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Eraser = ({ ...props }: GenericIconProps) => (
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
        d="M4.33 5.087a.5.5 0 01.706 0l4.635 4.635a.5.5 0 11-.707.707L4.33 5.794a.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.318 1.758a.592.592 0 00-.42.173L1.175 9.656a.593.593 0 000 .838l2.385 2.386h2.247l7.02-7.02a.593.593 0 000-.839l-3.09-3.09a.592.592 0 00-.418-.173zM7.22 12.88l6.314-6.314a1.592 1.592 0 000-2.252l-3.09-3.09a1.593 1.593 0 00-2.253 0L.466 8.95a1.593 1.593 0 000 2.252L3 13.734a.5.5 0 00.353.146h9.828a.5.5 0 100-1H7.22z"
        fill="currentColor"
      />
    </svg>
);
