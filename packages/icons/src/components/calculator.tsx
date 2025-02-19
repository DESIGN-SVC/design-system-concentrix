import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Calculator = ({ ...props }: GenericIconProps) => (
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
            d="M4.25 4.19a.5.5 0 01.5-.5h6.5a.5.5 0 01.5.5v3.25a.5.5 0 01-.5.5h-6.5a.5.5 0 01-.5-.5V4.19zm1 .5v2.25h5.5V4.69h-5.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.917 2.565a.042.042 0 00-.042-.042h-9.75a.042.042 0 00-.041.042V14.48c0 .023.018.042.041.042h9.75a.042.042 0 00.042-.042V2.565zm-.042-1.042c.576 0 1.042.466 1.042 1.042V14.48c0 .576-.466 1.042-1.042 1.042h-9.75a1.042 1.042 0 01-1.041-1.042V2.565c0-.576.466-1.042 1.041-1.042h9.75z"
            fill="currentColor"
        />
        <path
            d="M5.292 10.554a.677.677 0 100-1.354.677.677 0 000 1.354zM8 10.554A.677.677 0 108 9.2a.677.677 0 000 1.354zM10.708 10.554a.677.677 0 100-1.354.677.677 0 000 1.354zM5.292 13.262a.677.677 0 100-1.354.677.677 0 000 1.354zM8 13.262a.677.677 0 100-1.354.677.677 0 000 1.354zM10.708 13.262a.677.677 0 100-1.354.677.677 0 000 1.354z"
            fill="currentColor"
        />
    </svg>
);
