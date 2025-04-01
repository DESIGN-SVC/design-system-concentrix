import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Tray = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.092 2.262a.09.09 0 00-.091.09v11.819c0 .05.04.09.09.09h11.82c.05 0 .09-.04.09-.09V2.353a.09.09 0 00-.09-.091H2.09zM1 2.352c0-.602.488-1.09 1.09-1.09h11.82c.602 0 1.09.488 1.09 1.09v11.819a1.09 1.09 0 01-1.09 1.09H2.09a1.09 1.09 0 01-1.09-1.09V2.353z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 10.626a.5.5 0 01.5-.5h2.71a1.091 1.091 0 01.771.319l1.427 1.427a.092.092 0 00.064.026h3.056a.09.09 0 00.064-.026l1.427-1.427a1.093 1.093 0 01.771-.32h2.71a.5.5 0 110 1h-2.71a.09.09 0 00-.064.027l-.351-.351.35.351L10.3 12.58a1.09 1.09 0 01-.771.32H6.472a1.091 1.091 0 01-.771-.32l-1.427-1.427.314-.314-.314.314a.092.092 0 00-.064-.026H1.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
