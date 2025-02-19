import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShieldSlash = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.19 1.784a.5.5 0 01.705.034l6.551 7.21a.5.5 0 11-.74.672l-6.55-7.21a.5.5 0 01.033-.706z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.337 1.118a.066.066 0 00-.066.066v4.153c0 5.59 4.731 7.452 5.712 7.777l.006.002a.034.034 0 00.022 0l.005-.002c.547-.181 2.38-.885 3.823-2.525a.5.5 0 01.75.66c-1.61 1.832-3.635 2.607-4.256 2.813-.216.074-.45.074-.667 0-1.04-.345-6.395-2.425-6.395-8.725V1.184A1.066 1.066 0 011.337.118h.517a.5.5 0 010 1h-.517zM4.415.618a.5.5 0 01.5-.5h7.748a1.066 1.066 0 011.066 1.066v4.153c0 1.491-.303 2.756-.785 3.821a.5.5 0 01-.911-.412c.423-.933.696-2.057.696-3.41V1.185a.066.066 0 00-.066-.066H4.915a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
