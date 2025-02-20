import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AlignCenterVertical = ({ ...props }: GenericIconProps) => (
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
            d="M15 8.424a.5.5 0 01-.5.5h-1.625a.5.5 0 010-1H14.5a.5.5 0 01.5.5zM3.625 8.424a.5.5 0 01-.5.5H1.5a.5.5 0 010-1h1.625a.5.5 0 01.5.5zM9.584 8.424a.5.5 0 01-.5.5H6.917a.5.5 0 010-1h2.167a.5.5 0 01.5.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.375 4.632a.042.042 0 00-.042-.042H9.625a.042.042 0 00-.042.042v7.583c0 .023.019.042.042.042h2.708a.042.042 0 00.042-.042V4.632zm-.042-1.042c.576 0 1.042.467 1.042 1.042v7.583c0 .576-.466 1.042-1.042 1.042H9.625a1.042 1.042 0 01-1.042-1.042V4.632c0-.575.467-1.042 1.042-1.042h2.708zM6.417 3.007a.042.042 0 00-.042-.042H3.667a.042.042 0 00-.042.042V13.84c0 .023.019.042.042.042h2.708a.042.042 0 00.042-.042V3.007zm-.042-1.042c.576 0 1.042.467 1.042 1.042V13.84c0 .576-.466 1.042-1.042 1.042H3.667a1.042 1.042 0 01-1.042-1.042V3.007c0-.575.467-1.042 1.042-1.042h2.708z"
            fill="currentColor"
        />
    </svg>
);
