import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Desktop = ({ ...props }: GenericIconProps) => (
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
        d="M13.417 11.815A.583.583 0 0014 11.23V3.648a.583.583 0 00-.583-.584H2.583A.583.583 0 002 3.648v7.583c0 .322.261.584.583.584h10.834zM15 11.23c0 .875-.709 1.584-1.583 1.584H2.583A1.583 1.583 0 011 11.23V3.648c0-.875.709-1.584 1.583-1.584h10.834c.874 0 1.583.71 1.583 1.584v7.583zM5.333 14.481a.5.5 0 01.5-.5h4.333a.5.5 0 110 1H5.833a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.606a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM8 11.815a.5.5 0 01.5.5v2.166a.5.5 0 11-1 0v-2.166a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
