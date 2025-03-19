import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PaperPlaneTilt = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.854.264a.5.5 0 01.118.519l-4.55 13a.5.5 0 01-.929.038l-2.6-5.85a.5.5 0 01.103-.557l2.682-2.681a.5.5 0 11.707.707L6.946 7.878l1.949 4.384 3.79-10.83L1.897 5.209l2.045.852a.5.5 0 01.308.462v4.062l.405-.522a.5.5 0 11.79.612l-1.3 1.679a.5.5 0 01-.895-.306V6.855L.308 5.63a.5.5 0 01.027-.933l13-4.55a.5.5 0 01.519.118z"
        fill="currentColor"
      />
    </svg>
);
