import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AngularLogo = ({ ...props }: GenericIconProps) => (
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
            d="M7.807 1.229a.5.5 0 01.385 0l6.24 2.6a.5.5 0 01.303.528l-1.04 7.8a.5.5 0 01-.272.38l-5.2 2.6a.5.5 0 01-.447 0l-5.2-2.6a.5.5 0 01-.272-.38l-1.04-7.8a.5.5 0 01.303-.528l6.24-2.6zm-5.5 3.375l.953 7.158L8 14.132l4.74-2.37.954-7.158L8 2.232 2.306 4.604z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4.83a.5.5 0 01.447.277l2.34 4.68a.5.5 0 01-.895.447L8 6.45l-1.893 3.785a.5.5 0 11-.894-.447l2.34-4.68A.5.5 0 018 4.831z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.855 8.626a.5.5 0 01.5-.5h3.29a.5.5 0 110 1h-3.29a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
