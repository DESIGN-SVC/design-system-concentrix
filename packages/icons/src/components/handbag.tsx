import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Handbag = ({ ...props }: GenericIconProps) => (
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
        d="M2.232 5.046c.184-.165.422-.256.67-.256h10.197a1.004 1.004 0 01.998.893l.897 8.073a1.004 1.004 0 01-.999 1.115H2.005a1.004 1.004 0 01-.999-1.115l.897-8.073c.027-.246.144-.473.329-.637zm.67.744a.005.005 0 00-.005.004l-.468-.052.468.052L2 13.866v.002l.001.002.002.001H13.997L14 13.87v-.001l.001-.002-.897-8.073c0-.002 0-.003-.002-.003l-.003-.001H2.902z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.267a2.023 2.023 0 00-2.022 2.022v2.019a.5.5 0 01-1 0V5.289a3.023 3.023 0 116.045 0v2.019a.5.5 0 01-1 0V5.289A2.023 2.023 0 008 3.267z"
        fill="currentColor"
      />
    </svg>
);
