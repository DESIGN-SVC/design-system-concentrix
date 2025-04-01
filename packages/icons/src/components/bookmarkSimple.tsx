import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const BookmarkSimple = ({ ...props }: GenericIconProps) => (
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
            d="M4.044 2.523a.065.065 0 00-.065.066V14.12l3.756-2.348a.5.5 0 01.53 0l3.757 2.348V2.59a.065.065 0 00-.065-.066H4.044zm-.753-.688c.2-.2.47-.312.753-.312h7.913a1.065 1.065 0 011.065 1.066v12.434a.5.5 0 01-.765.424L8 12.787l-4.256 2.66a.5.5 0 01-.765-.424V2.59c0-.283.112-.554.312-.754z"
            fill="currentColor"
        />
    </svg>
);
