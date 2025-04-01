import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChartPieSliceSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.317 1.807a.5.5 0 01-.305.638 6.018 6.018 0 107.69 7.659.5.5 0 01.944.329 7.018 7.018 0 11-8.967-8.93.5.5 0 01.638.304z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.518 2.326c0-.66.547-1.262 1.278-1.18a7.018 7.018 0 016.196 6.196c.082.73-.522 1.278-1.18 1.278h-5.07a1.224 1.224 0 01-1.224-1.224v-5.07zm1.06-.149a.207.207 0 00-.06.15v5.069c0 .123.1.224.224.224h5.07a.207.207 0 00.148-.06.128.128 0 00.038-.107 6.02 6.02 0 00-5.313-5.314.127.127 0 00-.108.038z"
            fill="currentColor"
        />
    </svg>
);
