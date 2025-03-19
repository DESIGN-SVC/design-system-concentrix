import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AlignCenterHorizontal = ({ ...props }: GenericIconProps) => (
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
            d="M8 1.523a.5.5 0 01.5.5v1.625a.5.5 0 01-1 0V2.023a.5.5 0 01.5-.5zM8 12.898a.5.5 0 01.5.5v1.625a.5.5 0 11-1 0v-1.625a.5.5 0 01.5-.5zM8 6.94a.5.5 0 01.5.5v2.166a.5.5 0 01-1 0V7.44a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.209 4.148a.042.042 0 00-.042.042v2.708c0 .023.019.042.042.042h7.583a.042.042 0 00.042-.042V4.19a.042.042 0 00-.042-.042H4.209zm-1.042.042c0-.575.466-1.042 1.042-1.042h7.583c.575 0 1.042.467 1.042 1.042v2.708c0 .576-.467 1.042-1.042 1.042H4.209a1.042 1.042 0 01-1.042-1.042V4.19zM2.584 10.106a.042.042 0 00-.042.042v2.708c0 .024.019.042.042.042h10.833a.042.042 0 00.042-.042v-2.708a.042.042 0 00-.042-.042H2.584zm-1.042.042c0-.575.466-1.042 1.042-1.042h10.833c.575 0 1.042.467 1.042 1.042v2.708c0 .576-.467 1.042-1.042 1.042H2.584a1.042 1.042 0 01-1.042-1.042v-2.708z"
            fill="currentColor"
        />
    </svg>
);
