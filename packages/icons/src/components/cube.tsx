import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Cube = ({ ...props }: GenericIconProps) => (
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
            d="M7.499 1.162a1.09 1.09 0 01.982 0l5.96 3.012c.158.08.296.2.396.352a.95.95 0 01.155.519v6.002a.95.95 0 01-.155.519c-.1.152-.238.272-.396.352l-5.96 3.012a1.09 1.09 0 01-.982 0l-5.96-3.012c-.158-.08-.296-.2-.396-.352a.95.95 0 01-.155-.519V5.045a.95.95 0 01.155-.519c.1-.152.238-.272.396-.352l5.96-3.012zm.491.884a.09.09 0 00-.04.009L1.99 5.067h-.002v5.957l.002.001 5.96 3.012a.09.09 0 00.04.009.09.09 0 00.04-.009l5.96-3.012h.002V5.067l-.002-.001-5.96-3.012a.09.09 0 00-.04-.01z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.116 4.574a.5.5 0 01.671-.224l6.265 3.136 6.138-3.133a.5.5 0 11.455.89L8.282 8.491a.5.5 0 01-.451.002L1.34 5.245a.5.5 0 01-.224-.671z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.057 7.546a.5.5 0 01.495.505l-.062 6.5a.5.5 0 01-1-.01l.062-6.5a.5.5 0 01.505-.495z"
            fill="currentColor"
        />
    </svg>
);
