import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Vibrate = ({ ...props }: GenericIconProps) => (
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
            d="M10.286 4.39a.429.429 0 00-.428-.428H6.143a.429.429 0 00-.428.428v8.358c0 .236.192.428.428.428h3.715a.429.429 0 00.428-.428V4.39zm-.428-1.428c.788 0 1.428.64 1.428 1.428v8.358c0 .789-.64 1.428-1.428 1.428H6.143c-.789 0-1.428-.64-1.428-1.428V4.39c0-.788.64-1.428 1.428-1.428h3.715zM12.643 5.748a.5.5 0 01.5.5v4.642a.5.5 0 11-1 0V6.248a.5.5 0 01.5-.5zM14.5 6.676a.5.5 0 01.5.5V9.96a.5.5 0 01-1 0V7.176a.5.5 0 01.5-.5zM3.357 5.748a.5.5 0 01.5.5v4.642a.5.5 0 11-1 0V6.248a.5.5 0 01.5-.5zM1.5 6.676a.5.5 0 01.5.5V9.96a.5.5 0 01-1 0V7.176a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
