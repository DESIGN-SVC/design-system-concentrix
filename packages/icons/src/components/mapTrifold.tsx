import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MapTrifold = ({ ...props }: GenericIconProps) => (
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
            d="M6.318 2.536a.5.5 0 01-.363.606L2 4.132v8.718l3.712-.928a.5.5 0 11.243.97L1.62 13.976A.5.5 0 011 13.49V3.74a.5.5 0 01.379-.485l4.333-1.084a.5.5 0 01.606.364z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.57 2.232a.5.5 0 01.487-.022l4.333 2.167a.5.5 0 01.276.447v9.75a.5.5 0 01-.723.447l-4.334-2.167a.5.5 0 01-.276-.447v-9.75a.5.5 0 01.237-.425zm.763 1.234v8.632l3.333 1.667V5.133L6.333 3.466z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.808 3.347A.5.5 0 0115 3.74v9.75a.5.5 0 01-.378.485l-4.334 1.083a.5.5 0 01-.242-.97L14 13.1V4.381l-3.712.928a.5.5 0 01-.242-.97l4.333-1.083a.5.5 0 01.43.09z"
            fill="currentColor"
        />
    </svg>
);
