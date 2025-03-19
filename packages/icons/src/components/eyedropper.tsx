import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Eyedropper = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            d="M11.873 7.105l.36.36a1.179 1.179 0 010 1.653l-.513.513a.585.585 0 01-.835 0L6.45 5.195a.585.585 0 010-.834l.512-.512a1.178 1.178 0 011.654 0l.36.358 2.02-2.02c.79-.79 2.078-.834 2.883-.066a2.05 2.05 0 01.044 2.935l-2.05 2.05z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10.322 9.067l-4.099 4.099a2.32 2.32 0 01-2.261.607l-1.713.747a.585.585 0 01-.644-.117v0a.417.417 0 01-.088-.469l.79-1.815a2.32 2.32 0 01.608-2.262L7.014 5.76"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
