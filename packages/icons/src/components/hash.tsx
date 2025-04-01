import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Hash = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.611.572a.5.5 0 01.442.552l-.42 3.778H8.96l.432-3.888a.5.5 0 01.994.11l-.42 3.778h2.812a.5.5 0 110 1H9.855l-.37 3.334h3.293a.5.5 0 110 1H9.374l-.432 3.888a.5.5 0 11-.994-.11l.42-3.778H5.04l-.433 3.888a.5.5 0 11-.993-.11l.42-3.778H1.222a.5.5 0 010-1h2.923l.37-3.334H1.223a.5.5 0 110-1h3.404l.432-3.888a.5.5 0 01.552-.442zm-.089 5.33l-.37 3.334h3.327l.37-3.334H5.522z"
            fill="currentColor"
        />
    </svg>
);
