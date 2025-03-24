import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const EnvelopeOpen = ({ ...props }: GenericIconProps) => (
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
            d="M7.723 1.944a.5.5 0 01.554 0l6.5 4.334a.5.5 0 01.223.416v7.041a1.041 1.041 0 01-1.042 1.042H2.042A1.041 1.041 0 011 13.735V6.694a.5.5 0 01.223-.416l6.5-4.334zM2 6.961v6.774a.042.042 0 00.042.042h11.916a.042.042 0 00.042-.042V6.961l-6-4-6 4z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.227 10.197a.5.5 0 01-.12.697l-5.151 3.639a.5.5 0 01-.577-.817l5.15-3.638a.5.5 0 01.698.12zM8.773 10.197a.5.5 0 01.697-.12l5.151 3.64a.5.5 0 01-.577.816l-5.15-3.639a.5.5 0 01-.12-.697z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.093 6.404a.5.5 0 01.697-.117l5.188 3.699h2.044l5.188-3.7a.5.5 0 11.58.815l-5.318 3.792a.5.5 0 01-.29.093H6.818a.5.5 0 01-.29-.093L1.21 7.1a.5.5 0 01-.117-.697z"
            fill="currentColor"
        />
    </svg>
);
