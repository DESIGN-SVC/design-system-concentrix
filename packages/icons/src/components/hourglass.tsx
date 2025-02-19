import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Hourglass = ({ ...props }: GenericIconProps) => (
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
            d="M4.208 2.853a.042.042 0 00-.042.042v2.437a.042.042 0 00.017.034l3.815 2.861 3.818-2.886a.041.041 0 00.017-.033V2.895a.042.042 0 00-.042-.042H4.208zm-.737-.695c.195-.195.46-.305.737-.305h7.583a1.042 1.042 0 011.042 1.042v2.413a1.042 1.042 0 01-.414.83L8.301 9.253a.5.5 0 01-.602.001L3.583 6.166a1.042 1.042 0 01-.417-.834V2.895c0-.277.11-.542.305-.737z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.7 8.453a.5.5 0 01.6.001l4.12 3.113a1.042 1.042 0 01.413.831v2.413a1.042 1.042 0 01-1.042 1.042H4.208a1.041 1.041 0 01-1.042-1.042v-2.437a1.042 1.042 0 01.417-.834l4.116-3.087zm.298 1.026L4.183 12.34a.042.042 0 00-.017.033v2.437a.042.042 0 00.042.042h7.583a.042.042 0 00.042-.042v-2.413a.041.041 0 00-.017-.033L7.998 9.479z"
            fill="currentColor"
        />
    </svg>
);
