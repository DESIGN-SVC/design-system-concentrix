import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Image = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.042 1.414A.042.042 0 001 1.456v9.75c0 .023.019.041.042.041h11.916a.042.042 0 00.042-.041v-9.75a.042.042 0 00-.042-.042H1.042zM0 1.456C0 .88.466.414 1.042.414h11.916C13.534.414 14 .88 14 1.456v9.75c0 .575-.466 1.041-1.042 1.041H1.042A1.042 1.042 0 010 11.206v-9.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.292 5.972a.042.042 0 00-.03.012L3.91 5.63l.353.354L.854 9.393a.5.5 0 11-.708-.708l3.41-3.408a1.042 1.042 0 011.472 0l3.026 3.025a.042.042 0 00.059 0l1.4-1.4a1.042 1.042 0 011.474 0l2.867 2.867a.5.5 0 11-.708.707L10.28 7.609a.042.042 0 00-.059 0l-1.4 1.4a1.042 1.042 0 01-1.473 0L4.32 5.985a.042.042 0 00-.03-.012z"
            fill="currentColor"
        />
        <path
            d="M8.896 5.112a.677.677 0 100-1.354.677.677 0 000 1.354z"
            fill="currentColor"
        />
    </svg>
);
