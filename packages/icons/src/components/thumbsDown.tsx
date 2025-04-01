import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ThumbsDown = ({ ...props }: GenericIconProps) => (
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
            d="M2.005 9.11A.005.005 0 012 9.107V3.549a.005.005 0 01.005-.005h2.531V9.11h-2.53zm0 1h3.031a.5.5 0 00.5-.5V3.045a.5.5 0 00-.5-.5h-3.03A1.005 1.005 0 001 3.549v5.557a1.005 1.005 0 001.005 1.005z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.115 14.886a.5.5 0 00.447.276 2.52 2.52 0 002.52-2.52v-1.016h3.408a1.511 1.511 0 001.498-1.698l-.757-6.062a1.51 1.51 0 00-1.499-1.323H5.036a.5.5 0 100 1h7.696a.51.51 0 01.506.447l.758 6.062a.509.509 0 01-.506.574H9.583a.5.5 0 00-.5.5v1.516a1.52 1.52 0 01-1.226 1.491L5.483 9.387a.5.5 0 10-.894.447l2.526 5.052z"
            fill="currentColor"
        />
    </svg>
);
