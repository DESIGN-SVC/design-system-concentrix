import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const IdentificationCard = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={11}
      viewBox="0 0 14 11"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.617C0 .827.64.188 1.429.188H12.57c.79 0 1.429.64 1.429 1.429v7.428c0 .79-.64 1.429-1.429 1.429H1.43C.639 10.474 0 9.834 0 9.045V1.617zm2.857 7.857H6.5a1.821 1.821 0 00-3.643 0zm4.643 0a2.821 2.821 0 00-5.643 0H1.43A.429.429 0 011 9.045V1.617c0-.237.192-.429.429-.429H12.57c.237 0 .429.192.429.429v7.428a.429.429 0 01-.429.429H7.5zM2.786 3.938a1.893 1.893 0 113.785 0 1.893 1.893 0 01-3.785 0zm1.893-.893a.893.893 0 100 1.786.893.893 0 000-1.786zm6.5.929H8.393v-1h2.786v1zm0 2.785H8.393v-1h2.786v1z"
        fill="currentColor"
      />
    </svg>
);
