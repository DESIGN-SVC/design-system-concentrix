import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Bluetooth = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.776 1.053A.5.5 0 018.3 1.1l4.333 3.25a.5.5 0 010 .8L8.3 8.4a.5.5 0 01-.8-.4V1.5a.5.5 0 01.276-.447zM8.5 2.5V7l3-2.25-3-2.25z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.776 7.553A.5.5 0 018.3 7.6l4.333 3.25a.5.5 0 010 .8L8.3 14.9a.5.5 0 01-.8-.4V8a.5.5 0 01.276-.447zM8.5 9v4.5l3-2.25L8.5 9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.267 4.45a.5.5 0 01.7-.1L8.3 7.6a.5.5 0 01-.6.8L3.367 5.15a.5.5 0 01-.1-.7z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.4 7.7a.5.5 0 01-.1.7l-4.333 3.25a.5.5 0 01-.6-.8L7.7 7.6a.5.5 0 01.7.1z"
        fill="currentColor"
      />
    </svg>
);
