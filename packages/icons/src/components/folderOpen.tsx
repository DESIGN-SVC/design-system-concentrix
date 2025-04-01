import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FolderOpen = ({ ...props }: GenericIconProps) => (
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
            d="M2.008 4.249A.008.008 0 002 4.256v9.136a.5.5 0 11-1 0V4.256A1.008 1.008 0 012.008 3.25H5.39c.218 0 .43.07.605.201l1.76 1.32a.008.008 0 00.004.001h4.399a1.008 1.008 0 011.007 1.008V7.3a.5.5 0 01-1 0V5.78c0-.002 0-.004-.002-.006a.008.008 0 00-.005-.002h-4.4c-.217 0-.43-.07-.604-.201l-1.76-1.32a.008.008 0 00-.004-.001H2.008z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.76 7.801c-.002 0-.003 0-.005.002l-1.267.844c-.165.11-.36.17-.558.17H3.874a.008.008 0 00-.007.004l-1.628 4.071h10.067L14 7.812v-.004l-.001-.004a.007.007 0 00-.003-.002H8.76zm-.56-.83c.166-.11.36-.17.56-.17h5.232a1.008 1.008 0 01.956 1.326l-1.807 5.423a.5.5 0 01-.475.342H1.5a.5.5 0 01-.464-.686L2.938 8.45a1.008 1.008 0 01.936-.634h3.06L8.2 6.97z"
            fill="currentColor"
        />
    </svg>
);
