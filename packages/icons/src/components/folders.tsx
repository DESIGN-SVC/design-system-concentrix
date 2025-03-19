import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Folders = ({ ...props }: GenericIconProps) => (
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
            d="M2.02 5.95a.02.02 0 00-.02.02v7.28c0 .005.002.01.006.013a.02.02 0 00.014.006h9.9V7.53a.02.02 0 00-.006-.014.02.02 0 00-.014-.006H7.393a1.02 1.02 0 01-.612-.204L4.98 5.953a.02.02 0 00-.012-.004H2.02zm-.721-.702a1.02 1.02 0 01.721-.299h2.947c.22 0 .435.072.612.204L7.38 6.505a.02.02 0 00.012.004H11.9a1.02 1.02 0 011.02 1.02v5.778a.963.963 0 01-.962.962H2.02A1.02 1.02 0 011 13.25V5.97c0-.27.107-.53.299-.721z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.1 3.87a.02.02 0 00-.02.02v1.56a.5.5 0 01-1 0V3.89A1.02 1.02 0 014.1 2.87h2.947c.22 0 .435.07.612.203L9.46 4.425a.02.02 0 00.012.004h4.507A1.02 1.02 0 0115 5.45v5.778a.961.961 0 01-.962.962H12.42a.5.5 0 110-1H14V5.45a.02.02 0 00-.006-.014.02.02 0 00-.014-.006H9.473a1.02 1.02 0 01-.612-.204L7.06 3.873a.02.02 0 00-.012-.004H4.1z"
            fill="currentColor"
        />
    </svg>
);
