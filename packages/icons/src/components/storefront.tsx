import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const StoreFront = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.583 8.285a.5.5 0 01.5.5v4.632a.042.042 0 00.042.041h9.75a.042.042 0 00.041-.041V8.785a.5.5 0 011 0v4.632a1.042 1.042 0 01-1.041 1.041h-9.75a1.042 1.042 0 01-1.042-1.041V8.785a.5.5 0 01.5-.5zM2.992 2.542a.042.042 0 00-.04.03l-.79 2.761h11.675l-.789-2.761a.042.042 0 00-.04-.03H2.992zm-.627-.79c.18-.137.4-.21.627-.21h10.016a1.042 1.042 0 011.002.755l.97 3.399a.5.5 0 01-.48.637h-13a.5.5 0 01-.48-.637l.97-3.399c.063-.218.194-.41.375-.545z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 5.333a.5.5 0 01.5.5v1.083a1.667 1.667 0 103.333 0V5.833a.5.5 0 011 0v1.083a2.667 2.667 0 11-5.333 0V5.833a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.833 5.333a.5.5 0 01.5.5v1.083a1.667 1.667 0 103.333 0V5.833a.5.5 0 111 0v1.083a2.667 2.667 0 11-5.333 0V5.833a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.167 5.333a.5.5 0 01.5.5v1.083a1.667 1.667 0 003.333 0V5.833a.5.5 0 011 0v1.083a2.667 2.667 0 11-5.333 0V5.833a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
