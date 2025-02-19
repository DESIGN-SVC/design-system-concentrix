import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Heart = ({ ...props }: GenericIconProps) => (
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
            d="M9.889 2.874a3.76 3.76 0 014.19.98c1.383 1.536 1.141 3.892-.27 5.303l-5.08 5.08-.354-.353.354.353a1.002 1.002 0 01-1.417 0l-5.21-5.21a3.76 3.76 0 01.146-5.458c1.536-1.382 3.891-1.14 5.302.27l.47.47.602-.6a3.76 3.76 0 011.267-.835zm1.466.734a2.76 2.76 0 00-2.026.807l-.955.955a.5.5 0 01-.707 0l-.824-.824C5.756 3.46 4.005 3.333 2.917 4.313a2.76 2.76 0 00-.109 4.006L8.02 13.53h.002l5.08-5.08c1.087-1.087 1.213-2.838.234-3.926a2.76 2.76 0 00-1.98-.916z"
            fill="currentColor"
        />
    </svg>
);
