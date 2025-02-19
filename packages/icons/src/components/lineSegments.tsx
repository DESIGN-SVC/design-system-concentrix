import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const LineSegments = ({ ...props }: GenericIconProps) => (
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
            d="M2.893 12.14a.893.893 0 100 1.785.893.893 0 000-1.786zM1 13.031a1.893 1.893 0 113.786 0 1.893 1.893 0 01-3.786 0zM6.143 6.104a.893.893 0 100 1.785.893.893 0 000-1.785zm-1.893.892a1.893 1.893 0 113.786 0 1.893 1.893 0 01-3.786 0zM9.857 9.818a.893.893 0 100 1.786.893.893 0 000-1.786zm-1.893.893a1.893 1.893 0 113.786 0 1.893 1.893 0 01-3.786 0zM13.107 3.782a.893.893 0 100 1.786.893.893 0 000-1.786zm-1.893.893a1.893 1.893 0 113.786 0 1.893 1.893 0 01-3.786 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.72 7.783a.5.5 0 01.203.677l-1.929 3.582a.5.5 0 11-.88-.474l1.929-3.582a.5.5 0 01.677-.203zM6.774 7.627a.5.5 0 01.707 0l1.745 1.745a.5.5 0 01-.707.707L6.774 8.335a.5.5 0 010-.708zM12.684 5.461a.5.5 0 01.203.678l-1.93 3.582a.5.5 0 11-.88-.474l1.93-3.583a.5.5 0 01.677-.203z"
            fill="currentColor"
        />
    </svg>
);
