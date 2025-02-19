import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowLeftArc = ({ ...props }: GenericIconProps) => (
    <svg
        width={15}
        height={16}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.673 2.065l5.54 4.883c.21.184.529.163.714-.047a.506.506 0 00-.043-.715l-5.606-4.94-.002-.003a.92.92 0 00-.672-.223.931.931 0 00-.635.317L.713 7.372a.931.931 0 00-.228.673.92.92 0 00.314.634L6.8 13.906a.92.92 0 00.671.224.931.931 0 00.636-.318l2.365-2.716a.506.506 0 00-.047-.714.506.506 0 00-.714.052l-2.309 2.65L1.53 7.97l5.143-5.905z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.35 4.953a.5.5 0 01.053.705l-1.75 2.04 2.04 1.752a.5.5 0 01-.65.759L4.621 8.132a.5.5 0 01-.054-.705l2.076-2.42a.5.5 0 01.705-.054z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.154 7.062a4.228 4.228 0 011.91 2.056c.393.89.495 1.91.305 2.924a6.02 6.02 0 01-1.357 2.794.489.489 0 01-.69.06.489.489 0 01-.044-.69 5.015 5.015 0 001.132-2.324c.156-.835.069-1.653-.24-2.352a3.28 3.28 0 00-1.483-1.598c-.66-.346-1.443-.472-2.254-.35l-2.16.322a.476.476 0 01-.546-.412.502.502 0 01.423-.556l2.16-.323c1-.15 1.992.002 2.844.449z"
            fill="currentColor"
        />
    </svg>
);
