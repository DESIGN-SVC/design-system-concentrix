import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ThumbsUp = ({ ...props }: GenericIconProps) => (
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
            d="M2.005 8.595A.005.005 0 002 8.6v5.557c0 .002 0 .003.002.004l.003.001h2.531V8.595h-2.53zm0-1h3.031a.5.5 0 01.5.5v6.567a.5.5 0 01-.5.5h-3.03A1.005 1.005 0 011 14.157V8.6a1.005 1.005 0 011.005-1.005z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.115 2.82a.5.5 0 01.447-.276 2.52 2.52 0 012.52 2.52V6.08h3.408a1.51 1.51 0 011.498 1.698l-.757 6.062a1.51 1.51 0 01-1.499 1.323H5.036a.5.5 0 110-1h7.696a.51.51 0 00.506-.447l.758-6.062a.509.509 0 00-.506-.574H9.583a.5.5 0 01-.5-.5V5.065a1.52 1.52 0 00-1.226-1.492L5.483 8.319a.5.5 0 01-.894-.447L7.115 2.82z"
            fill="currentColor"
        />
    </svg>
);
