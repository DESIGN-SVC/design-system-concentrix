import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Mouse = ({ ...props }: GenericIconProps) => (
    <svg
        width={12}
        height={15}
        viewBox="0 0 12 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.645 1.14a3.292 3.292 0 00-3.291 3.292v1.125h4.145V1.14h-.854zM6 .14h1.355a4.292 4.292 0 014.291 4.292v5.416a4.292 4.292 0 01-4.291 4.292H4.645A4.292 4.292 0 01.354 9.848V4.432A4.292 4.292 0 014.645.14H6zm.5 1v4.417h4.146V4.432A3.292 3.292 0 007.354 1.14h-.855zm-.513 5.417a.499.499 0 00.026 0h4.633v3.291a3.292 3.292 0 01-3.291 3.292H4.645a3.292 3.292 0 01-3.291-3.292V6.557h4.632z"
            fill="currentColor"
        />
    </svg>
);
