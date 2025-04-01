import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Clipboard = ({ ...props }: GenericIconProps) => (
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
            d="M3.32 3.563a.02.02 0 00-.02.02v10.92c0 .005.002.01.006.014a.02.02 0 00.014.006h9.36a.02.02 0 00.014-.006.02.02 0 00.006-.014V3.583a.02.02 0 00-.006-.014.02.02 0 00-.014-.006h-2.6a.5.5 0 010-1h2.6a1.02 1.02 0 011.02 1.02v10.92a1.02 1.02 0 01-1.02 1.02H3.32a1.02 1.02 0 01-1.02-1.02V3.583a1.02 1.02 0 011.02-1.02h2.6a.5.5 0 110 1h-2.6z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.523a2.1 2.1 0 00-2.1 2.1v.02h4.2v-.02a2.1 2.1 0 00-2.1-2.1zM5.806 2.43A3.1 3.1 0 0111.1 4.623v.52a.5.5 0 01-.5.5H5.4a.5.5 0 01-.5-.5v-.52a3.1 3.1 0 01.908-2.192z"
            fill="currentColor"
        />
    </svg>
);
