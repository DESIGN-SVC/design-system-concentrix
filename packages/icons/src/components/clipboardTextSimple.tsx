import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ClipboardTextSimple = ({ ...props }: GenericIconProps) => (
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
            d="M5.42 9.865a.5.5 0 01.5-.5h4.16a.5.5 0 110 1H5.92a.5.5 0 01-.5-.5zM5.42 7.785a.5.5 0 01.5-.5h4.16a.5.5 0 110 1H5.92a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.32 3.085a.02.02 0 00-.02.02v10.92c0 .005.002.01.006.014a.02.02 0 00.014.006h9.36a.02.02 0 00.014-.006.02.02 0 00.006-.014V3.105a.02.02 0 00-.006-.014.02.02 0 00-.014-.006h-2.6a.5.5 0 010-1h2.6a1.02 1.02 0 011.02 1.02v10.92a1.02 1.02 0 01-1.02 1.02H3.32a1.02 1.02 0 01-1.02-1.02V3.105a1.02 1.02 0 011.02-1.02h2.6a.5.5 0 110 1h-2.6z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.045a2.1 2.1 0 00-2.1 2.1v.02h4.2v-.02a2.1 2.1 0 00-2.1-2.1zm-2.193-.092A3.1 3.1 0 0111.1 4.145v.52a.5.5 0 01-.5.5H5.4a.5.5 0 01-.5-.5v-.52a3.1 3.1 0 01.908-2.192z"
            fill="currentColor"
        />
    </svg>
);
