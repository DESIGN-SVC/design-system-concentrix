import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PenNib = ({ ...props }: GenericIconProps) => (
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
            d="M7.051 8.741a.822.822 0 100 1.644.822.822 0 000-1.644zm-1.822.822a1.822 1.822 0 113.644 0 1.822 1.822 0 01-3.644 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.47 10.144a.5.5 0 010 .707l-4.616 4.617a.5.5 0 11-.708-.707l4.617-4.617a.5.5 0 01.707 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.14 3.543a.5.5 0 01.53.115l5.287 5.287a.5.5 0 01.115.53l-1.48 3.944a1.029 1.029 0 01-.793.653l-9.217 1.536a.5.5 0 01-.575-.575l1.536-9.217a1.029 1.029 0 01.653-.794l3.945-1.479zm.05 1.05L3.548 5.958l-.176-.469.176.469a.029.029 0 00-.019.022l-1.42 8.526 8.525-1.421a.029.029 0 00.022-.019l1.367-3.642L7.19 4.592z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.704 1.917a1.029 1.029 0 011.455 0l4.54 4.54a1.03 1.03 0 010 1.454l-1.742 1.741a.5.5 0 11-.707-.707l1.742-1.741a.028.028 0 00.006-.01.028.028 0 000-.021.028.028 0 00-.006-.01l-4.54-4.54a.029.029 0 00-.04 0L7.67 4.366a.5.5 0 01-.707-.707l1.741-1.741.332.331-.332-.331z"
            fill="currentColor"
        />
    </svg>
);
