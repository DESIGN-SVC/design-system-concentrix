import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MagnetStraight = ({ ...props }: GenericIconProps) => (
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
        d="M1.59 5.661a.5.5 0 01.5-.5h4.137a.5.5 0 010 1H2.091a.5.5 0 01-.5-.5zM9.272 5.661a.5.5 0 01.5-.5h4.137a.5.5 0 110 1H9.772a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.682 2.616a.09.09 0 00-.091.09v6.5a5.41 5.41 0 005.45 5.41c2.975-.022 5.368-2.492 5.368-5.484V2.707a.091.091 0 00-.09-.091h-2.956a.09.09 0 00-.09.09v6.5a2.273 2.273 0 11-4.546 0v-6.5a.09.09 0 00-.09-.09H2.681zm-.772-.68a1.09 1.09 0 01.772-.32h2.954a1.09 1.09 0 011.091 1.09v6.5a1.273 1.273 0 002.546 0v-6.5a1.09 1.09 0 011.09-1.09h2.955a1.091 1.091 0 011.091 1.09v6.426c0 3.525-2.82 6.457-6.36 6.484l-.004-.5.004.5a6.409 6.409 0 01-6.458-6.41v-6.5c0-.289.115-.566.32-.77z"
        fill="currentColor"
      />
    </svg>
);
