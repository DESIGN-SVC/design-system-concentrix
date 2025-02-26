import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GooglePodcastsLogo = ({ ...props }: GenericIconProps) => (
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
            d="M8 1.19a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM11 3.94a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM8 12.69a.5.5 0 01.5.5v1.5a.5.5 0 11-1 0v-1.5a.5.5 0 01.5-.5zM8 4.69a.5.5 0 01.5.5v6a.5.5 0 11-1 0v-6a.5.5 0 01.5-.5zM5 3.94a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zM11 7.44a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5zM2 6.94a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM5 9.94a.5.5 0 01.5.5v1.5a.5.5 0 11-1 0v-1.5a.5.5 0 01.5-.5zM14 6.94a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
