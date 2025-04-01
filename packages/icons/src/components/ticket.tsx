import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Ticket = ({ ...props }: GenericIconProps) => (
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
            d="M6 3.853a.5.5 0 01.5.5v9a.5.5 0 11-1 0v-9a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.293 4.146A1 1 0 012 3.853h12a1 1 0 011 1v1.55a1 1 0 01-.8.98l-.1-.49.1.49a1.5 1.5 0 000 2.94.999.999 0 01.8.98v1.55a1 1 0 01-1 1H2a1 1 0 01-1-1v-1.55a1 1 0 01.8-.98l.1.49-.1-.49a1.5 1.5 0 000-2.94l.1-.49-.1.49a1 1 0 01-.8-.98h.5H1v-1.55a1 1 0 01.293-.707zM14 4.853H2v1.55a2.5 2.5 0 010 4.9v1.55h12v-1.55a2.5 2.5 0 010-4.9v-1.55z"
            fill="currentColor"
        />
    </svg>
);
