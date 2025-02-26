import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AppStoreLogo = ({ ...props }: GenericIconProps) => (
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
            d="M8.908 6.766a.5.5 0 01.685.176l3.837 6.494a.5.5 0 11-.86.509L8.731 7.451a.5.5 0 01.176-.685zM6.246 2.26a.5.5 0 01.684.176l1.5 2.538a.5.5 0 11-.86.508l-1.5-2.537a.5.5 0 01.176-.685zM3.85 12.26a.5.5 0 01.174.686l-.594 1a.5.5 0 01-.86-.51l.594-1a.5.5 0 01.685-.175z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.755 2.26a.5.5 0 01.176.685l-4.725 8a.5.5 0 11-.861-.509l4.725-8a.5.5 0 01.685-.176zM10.725 10.69a.5.5 0 01.5-.5H14.5a.5.5 0 110 1h-3.275a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10.69a.5.5 0 01.5-.5h7.406a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
