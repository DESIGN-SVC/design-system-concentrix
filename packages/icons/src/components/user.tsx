import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const User = ({ ...props }: GenericIconProps) => (
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
        d="M8 2.262a2.389 2.389 0 100 4.777 2.389 2.389 0 000-4.777zM4.611 4.65a3.389 3.389 0 116.778 0 3.389 3.389 0 01-6.778 0zM8 10.206c-2.544 0-3.933.906-4.635 2.055-.285.466-.2.921.129 1.304.347.403.956.697 1.617.697h5.778c.661 0 1.27-.294 1.618-.697.329-.383.413-.838.128-1.304-.702-1.149-2.09-2.055-4.635-2.055zM2.512 11.74C3.437 10.225 5.196 9.206 8 9.206c2.805 0 4.563 1.02 5.488 2.533.547.895.342 1.821-.224 2.479-.548.637-1.44 1.044-2.375 1.044H5.11c-.934 0-1.827-.407-2.375-1.044-.566-.658-.77-1.584-.224-2.479z"
        fill="currentColor"
      />
    </svg>
);
