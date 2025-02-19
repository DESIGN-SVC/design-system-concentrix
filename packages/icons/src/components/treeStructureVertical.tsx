import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TreeStructureVertical = ({ ...props }: GenericIconProps) => (
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
            d="M8 11.387a1.568 1.568 0 100 3.136 1.568 1.568 0 000-3.136zm-2.568 1.568a2.568 2.568 0 115.136 0 2.568 2.568 0 01-5.136 0zM12.431 2.523a1.568 1.568 0 100 3.137 1.568 1.568 0 000-3.137zM9.863 4.092a2.568 2.568 0 115.137 0 2.568 2.568 0 01-5.137 0zM3.568 2.523a1.568 1.568 0 100 3.137 1.568 1.568 0 000-3.137zM1 4.092a2.568 2.568 0 115.136 0 2.568 2.568 0 01-5.136 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.568 5.66a.5.5 0 01.5.5v.59a1.273 1.273 0 001.273 1.273h5.318a1.272 1.272 0 001.273-1.272V6.16a.5.5 0 011 0v.59a2.273 2.273 0 01-2.273 2.273H5.341a2.272 2.272 0 01-2.273-2.272V6.16a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8.023a.5.5 0 01.5.5v2.364a.5.5 0 01-1 0V8.523a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
