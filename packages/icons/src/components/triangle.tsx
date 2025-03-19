import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Triangle = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.259.566a1.536 1.536 0 011.482 0c.227.125.418.307.552.528l-.424.257.424-.257 5.5 9.087a1.424 1.424 0 01.002 1.474 1.48 1.48 0 01-.553.53c-.227.126-.483.191-.742.191h-11c-.259 0-.515-.065-.742-.19a1.48 1.48 0 01-.552-.53 1.425 1.425 0 010-1.475l5.5-9.087.518.314-.517-.314a1.48 1.48 0 01.552-.528zm.741.81a.536.536 0 00-.258.066.48.48 0 00-.18.17l-5.5 9.087a.425.425 0 000 .44.48.48 0 00.18.171.535.535 0 00.258.066h11a.535.535 0 00.258-.066.48.48 0 00.18-.17.425.425 0 000-.44l-5.5-9.088a.48.48 0 00-.18-.17A.536.536 0 007 1.376z"
            fill="currentColor"
        />
    </svg>
);
