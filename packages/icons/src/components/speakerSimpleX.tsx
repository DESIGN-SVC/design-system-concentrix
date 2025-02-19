import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SpeakerSimpleX = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.717.047a.5.5 0 01.29.453v13a.5.5 0 01-.823.383L3.82 10.207H1a.982.982 0 01-.72-.319A1.065 1.065 0 010 9.167V4.833c0-.264.097-.524.28-.722.183-.2.442-.32.72-.32h2.82L8.184.119a.5.5 0 01.533-.071zm-.71 1.528l-3.682 3.1a.5.5 0 01-.322.117h-2.99A.07.07 0 001 4.833v4.334c0 .02.007.035.012.041h2.99a.5.5 0 01.323.118l3.681 3.1V1.574zM13.832 4.943a.5.5 0 01.042.706l-2.987 3.367a.5.5 0 11-.748-.663l2.987-3.368a.5.5 0 01.706-.042z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.18 4.943a.5.5 0 01.707.042l2.987 3.368a.5.5 0 11-.748.663L10.139 5.65a.5.5 0 01.042-.706zM3.87 3.792a.5.5 0 01.5.5v5.416a.5.5 0 11-1 0V4.291a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
