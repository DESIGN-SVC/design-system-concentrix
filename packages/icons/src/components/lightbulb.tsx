import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Lightbulb = ({ ...props }: GenericIconProps) => (
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
            d="M5 14.83a.5.5 0 01.5-.5h5a.5.5 0 110 1h-5a.5.5 0 01-.5-.5zM10.544 3.119a4.5 4.5 0 00-2.653-.787c-2.436.057-4.404 2.086-4.39 4.524a4.493 4.493 0 001.725 3.518A2.005 2.005 0 016 11.952v.379h4v-.38a2.018 2.018 0 01.78-1.582 4.5 4.5 0 00-.236-7.25zm-5.625 7.65l-.308.394a5.492 5.492 0 01-2.11-4.302C2.483 3.88 4.884 1.402 7.866 1.332M4.92 10.77l-.308.394a1.009 1.009 0 01.389.791v.377a1 1 0 001 1h4a1 1 0 001-1v-.375a1.017 1.017 0 01.395-.798l.002-.002a5.5 5.5 0 00-3.53-9.824"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.015 3.796a.5.5 0 01.577-.41 3.495 3.495 0 012.859 2.856.5.5 0 11-.986.17 2.496 2.496 0 00-2.04-2.04.5.5 0 01-.41-.576z"
            fill="currentColor"
        />
    </svg>
);
