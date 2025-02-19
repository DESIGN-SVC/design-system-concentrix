import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MonitorArrowUp = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.417 9.814A.583.583 0 0013 9.231V1.648a.583.583 0 00-.583-.584H1.583A.583.583 0 001 1.648V9.23c0 .322.261.583.583.583h10.834zM14 9.231c0 .875-.709 1.584-1.583 1.584H1.583A1.583 1.583 0 010 9.23V1.648C0 .773.709.064 1.583.064h10.834C13.29.064 14 .774 14 1.648V9.23zM4.334 12.481a.5.5 0 01.5-.5h4.333a.5.5 0 110 1H4.834a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 9.814a.5.5 0 01.5.5v2.167a.5.5 0 11-1 0v-2.166a.5.5 0 01.5-.5zM6.999 2.654a.5.5 0 01.5.5v4.643a.5.5 0 11-1 0V3.154a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.646 2.8a.5.5 0 01.707 0L9.21 4.659a.5.5 0 11-.707.707L7 3.861 5.496 5.365a.5.5 0 11-.707-.707L6.646 2.8z"
            fill="currentColor"
        />
    </svg>
);
