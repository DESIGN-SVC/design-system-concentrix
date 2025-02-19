import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AirPlay = ({ ...props }: GenericIconProps) => (
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
        d="M8 9.406a.5.5 0 01.38.176l3.25 3.812a.5.5 0 01-.381.825h-6.5a.5.5 0 01-.38-.825l3.25-3.812a.5.5 0 01.38-.176zM5.831 13.22h4.334l-2.167-2.542-2.167 2.542z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.583 2.781a.58.58 0 00-.411.172A.592.592 0 002 3.37v7.624c0 .158.062.308.172.418a.58.58 0 00.411.172h1.084a.5.5 0 010 1H2.583a1.58 1.58 0 01-1.12-.467A1.592 1.592 0 011 10.995V3.372c0-.421.166-.825.463-1.123a1.58 1.58 0 011.12-.467h10.834c.42 0 .824.168 1.12.467.297.298.463.702.463 1.123v7.624c0 .421-.166.825-.463 1.123a1.58 1.58 0 01-1.12.467h-1.084a.5.5 0 110-1h1.084a.58.58 0 00.411-.172c.11-.11.172-.26.172-.418V3.372a.592.592 0 00-.172-.418.58.58 0 00-.411-.172H2.583z"
        fill="currentColor"
      />
    </svg>
);
