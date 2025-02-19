import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Funnel = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.054 1.939a.054.054 0 00-.04.09l4.55 5.006c.177.194.275.446.275.709v5.395a.054.054 0 00.083.045l2.215-1.477a.054.054 0 00.024-.044v-3.92c0-.262.098-.514.274-.708l4.551-5.006a.054.054 0 00.01-.058.054.054 0 00-.05-.032H1.054zm0-1h11.892a1.053 1.053 0 01.78 1.762L9.175 7.707a.054.054 0 00-.014.037v3.919a1.054 1.054 0 01-.47.876l-2.214 1.477a1.054 1.054 0 01-1.638-.877V7.744a.054.054 0 00-.014-.037L.274 2.701A1.054 1.054 0 011.054.94z"
            fill="currentColor"
        />
    </svg>
);
