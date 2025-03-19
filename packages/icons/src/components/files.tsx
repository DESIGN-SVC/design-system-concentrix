import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Files = ({ ...props }: GenericIconProps) => (
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
            d="M3.122 4.735a.042.042 0 00-.042.042v9.75a.042.042 0 00.042.042h7.583a.042.042 0 00.042-.042V7.151L8.33 4.735h-5.21zm-.737-.695c.196-.195.46-.305.737-.305h5.416a.5.5 0 01.354.147L11.6 6.59a.5.5 0 01.147.354v7.583a1.042 1.042 0 01-1.042 1.042H3.122a1.042 1.042 0 01-1.042-1.042v-9.75c0-.276.11-.541.305-.737z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.289 2.569a.042.042 0 00-.042.042v1.625a.5.5 0 11-1 0V2.61A1.042 1.042 0 015.29 1.569h5.416a.5.5 0 01.354.146l2.708 2.709a.5.5 0 01.147.353v7.583a1.042 1.042 0 01-1.042 1.042h-1.625a.5.5 0 110-1h1.625a.042.042 0 00.042-.041V4.984L10.498 2.57h-5.21z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.788 10.194a.5.5 0 01.5-.5h3.25a.5.5 0 110 1h-3.25a.5.5 0 01-.5-.5zM4.788 12.36a.5.5 0 01.5-.5h3.25a.5.5 0 110 1h-3.25a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
