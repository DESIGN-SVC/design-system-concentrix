import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MapPin = ({ ...props }: GenericIconProps) => (
    <svg
      width={10}
      height={14}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 5.006a4 4 0 00-8 0c0 1.352 1.234 3.733 3.715 7.01l.014.018a.34.34 0 00.542 0C7.762 8.748 9 6.361 9 5.006zm-4.393 8.5c-.16-.2-.288-.363-.384-.49C1.408 9.367 0 6.697 0 5.005a5 5 0 0110 0c0 1.693-1.41 4.366-4.228 8.02-.095.123-.222.284-.379.484a.498.498 0 01-.785 0l-.001-.004zM5 6.006a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 110-4 2 2 0 010 4z"
        fill="currentColor"
      />
    </svg>
);
