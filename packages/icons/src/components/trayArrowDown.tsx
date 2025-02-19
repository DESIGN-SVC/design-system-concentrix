import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TrayArrowDown = ({ ...props }: GenericIconProps) => (
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
            d="M2.092 2.262a.09.09 0 00-.091.09V14.17c0 .05.04.091.09.091H13.91c.05 0 .091-.04.091-.09V2.352a.09.09 0 00-.09-.091H2.091zM1 2.352c0-.602.488-1.09 1.09-1.09H13.91c.603 0 1.091.488 1.091 1.09V14.17a1.09 1.09 0 01-1.09 1.091H2.091A1.09 1.09 0 011 14.171V2.352z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.14 7.174a.5.5 0 01.708 0L8 9.327l2.153-2.153a.5.5 0 11.707.707l-2.506 2.507a.5.5 0 01-.708 0L5.141 7.88a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 3.625a.5.5 0 01.5.5v5.91a.5.5 0 11-1 0v-5.91a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10.625a.5.5 0 01.5-.5h2.71a1.091 1.091 0 01.771.32l1.427 1.426-.33.33.33-.33a.089.089 0 00.064.027h3.056a.09.09 0 00.064-.027l1.426-1.427a1.092 1.092 0 01.772-.319h2.71a.5.5 0 110 1h-2.71a.092.092 0 00-.064.027l-1.427 1.426a1.09 1.09 0 01-.771.32H6.472a1.091 1.091 0 01-.772-.32l-1.426-1.426.353-.354-.353.354a.092.092 0 00-.064-.027H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
