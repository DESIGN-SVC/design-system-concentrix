import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FolderMinus = ({ ...props }: GenericIconProps) => (
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
            d="M7.5 5.044a.5.5 0 01.5-.5h5.958A1.042 1.042 0 0115 5.586v7.583a1.041 1.041 0 01-1.042 1.042H2.04A1.043 1.043 0 011 13.17V6.668a.5.5 0 111 0v6.499a.043.043 0 00.043.043h11.915a.042.042 0 00.042-.042V5.586a.042.042 0 00-.042-.042H8a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.042 3.919A.042.042 0 002 3.961v2.208h3.653a.042.042 0 00.025-.008l1.489-1.117-1.49-1.117a.042.042 0 00-.024-.008H2.042zm-.737-.695c.195-.195.46-.305.737-.305h3.61c.226 0 .445.073.626.208L8.3 4.644a.5.5 0 010 .8L6.278 6.961c-.18.135-.4.208-.625.208H1.5a.5.5 0 01-.5-.5V3.96c0-.277.11-.542.305-.737zM5.875 9.648a.5.5 0 01.5-.5h3.25a.5.5 0 010 1h-3.25a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
