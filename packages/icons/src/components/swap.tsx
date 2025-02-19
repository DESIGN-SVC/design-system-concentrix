import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Swap = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.865 1.32A1.09 1.09 0 015.637 1h8.272A1.091 1.091 0 0115 2.09v7.682a1.09 1.09 0 01-1.09 1.091H4.454a.5.5 0 110-1h9.454a.091.091 0 00.091-.09V2.09A.091.091 0 0013.91 2H5.636a.09.09 0 00-.091.09v.592a.5.5 0 01-1 0V2.09c0-.29.115-.567.32-.771z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.581 8.238a.5.5 0 010 .707l-1.419 1.419 1.42 1.42a.5.5 0 11-.708.706l-1.772-1.773a.5.5 0 010-.707l1.772-1.772a.5.5 0 01.707 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.32 5.456a1.09 1.09 0 01.77-.32h9.455a.5.5 0 110 1H2.091A.09.09 0 002 6.229v7.681a.09.09 0 00.09.091h8.273a.09.09 0 00.091-.09v-.592a.5.5 0 011 0v.591A1.09 1.09 0 0110.364 15H2.09A1.091 1.091 0 011 13.91V6.227c0-.29.115-.567.32-.772z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.419 3.51a.5.5 0 01.707 0l1.773 1.773a.5.5 0 010 .707l-1.773 1.773a.5.5 0 11-.707-.707l1.419-1.42-1.42-1.419a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
