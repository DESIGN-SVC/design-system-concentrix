import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Trophy = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={12}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.71 1.808c0-.77.625-1.394 1.395-1.394h5.789c.77 0 1.394.624 1.394 1.394v.155h1.748a.964.964 0 01.964.964v.928a2.356 2.356 0 01-2.356 2.356h-.483a4.292 4.292 0 01-3.657 3.22v1.348H8.86a.5.5 0 010 1H5.147a.5.5 0 010-1h1.357V9.431a4.292 4.292 0 01-3.666-3.22h-.482A2.356 2.356 0 010 3.855v-.928a.964.964 0 01.964-.964h1.747v-.155zm0 1.155H1v.892a1.356 1.356 0 001.356 1.356h.355V2.963zm8.578 2.208V2.963H13v.892a1.356 1.356 0 01-1.356 1.356h-.357v-.04zM4.105 1.414a.394.394 0 00-.394.394V5.17a3.288 3.288 0 106.577 0V1.808a.394.394 0 00-.394-.394h-5.79z"
            fill="currentColor"
        />
    </svg>
);
