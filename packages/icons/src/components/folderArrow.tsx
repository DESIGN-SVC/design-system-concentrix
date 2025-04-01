import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FolderArrow = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.012 3.362a.042.042 0 01.03-.012h3.61c.01 0 .019.003.026.008l1.489 1.117-1.49 1.117a.042.042 0 01-.024.008H2V3.392c0-.011.004-.022.012-.03zm.03-1.012A1.042 1.042 0 001 3.392v9.21a1.043 1.043 0 001.04 1.04H13.958A1.042 1.042 0 0015 12.6V5.017a1.041 1.041 0 00-1.042-1.042H8.167l-1.89-1.417c-.18-.135-.399-.208-.624-.208H2.042zm6.125 2.625l-1.89 1.417c-.18.135-.399.208-.624.208H2V12.6a.043.043 0 00.043.043h11.915A.042.042 0 0014 12.6V5.017a.042.042 0 00-.042-.042H8.167zM5.5 9a.5.5 0 01.5-.5h2.793l-.647-.646a.5.5 0 11.708-.708l1.429 1.43a.6.6 0 010 .848l-1.43 1.43a.5.5 0 01-.707-.708l.647-.646H6a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
