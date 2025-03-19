import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const BellRinging = ({ ...props }: GenericIconProps) => (
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
            d="M8 3.616a3.988 3.988 0 00-3.987 3.999v.003c0 2.308-.484 3.696-.949 4.496v.002h9.873v-.002c-.466-.8-.95-2.19-.95-4.498h.5l-.5-.001a3.987 3.987 0 00-3.986-3.999zm4.988 4a4.989 4.989 0 10-9.975 0c0 2.167-.453 3.375-.813 3.995a1 1 0 00.86 1.505H12.94a1.001 1.001 0 00.861-1.505l-.431.252.432-.251c-.36-.62-.813-1.828-.813-3.995z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12.116a.5.5 0 01.5.5v.5a1.5 1.5 0 003 0v-.5a.5.5 0 011 0v.5a2.5 2.5 0 01-5 0v-.5a.5.5 0 01.5-.5zM11.041 1.849a.5.5 0 01.69-.156 7.029 7.029 0 012.551 2.834.5.5 0 11-.897.442 6.028 6.028 0 00-2.188-2.43.5.5 0 01-.156-.69zM4.959 1.849a.5.5 0 01-.156.69 6.029 6.029 0 00-2.188 2.43.5.5 0 11-.897-.442 7.029 7.029 0 012.551-2.834.5.5 0 01.69.156z"
            fill="currentColor"
        />
    </svg>
);
