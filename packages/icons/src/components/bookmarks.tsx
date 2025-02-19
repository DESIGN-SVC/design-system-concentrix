import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Bookmarks = ({ ...props }: GenericIconProps) => (
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
        d="M3.667 4.69a.042.042 0 00-.042.042v9.32l3-2.144a.5.5 0 01.582 0l3.001 2.144v-9.32a.042.042 0 00-.041-.042h-6.5zm-.737-.695c.195-.195.46-.305.737-.305h6.5a1.042 1.042 0 011.041 1.042v10.291a.5.5 0 01-.79.407l-3.502-2.5-3.5 2.5a.5.5 0 01-.791-.407V4.732c0-.277.11-.542.305-.737z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.834 2.523a.042.042 0 00-.042.042V4.19a.5.5 0 11-1 0V2.565a1.042 1.042 0 011.042-1.042h6.5a1.042 1.042 0 011.041 1.042v10.292a.5.5 0 01-.79.407l-2.167-1.548a.5.5 0 11.581-.813l1.376.982v-9.32a.042.042 0 00-.041-.042h-6.5z"
        fill="currentColor"
      />
    </svg>
);
