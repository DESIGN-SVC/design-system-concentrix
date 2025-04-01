import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ListPlus = ({ ...props }: GenericIconProps) => (
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
        d="M1 3.704a.5.5 0 01.5-.5h11.917a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM1 8.037a.5.5 0 01.5-.5h11.917a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM1 12.37a.5.5 0 01.5-.5h7.042a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM10.75 12.37a.5.5 0 01.5-.5h3.25a.5.5 0 010 1h-3.25a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.875 10.245a.5.5 0 01.5.5v3.25a.5.5 0 11-1 0v-3.25a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
