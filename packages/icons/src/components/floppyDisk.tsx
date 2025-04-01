import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FloppyDisk = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5.853C.672.853 0 1.52 0 2.343v11.02c0 .823.672 1.49 1.5 1.49h11c.828 0 1.5-.667 1.5-1.49V5.409c0-.396-.158-.775-.44-1.054L10.477 1.29a1.505 1.505 0 00-1.06-.437H1.5zM1 2.343c0-.274.224-.496.5-.496h7.915c.133 0 .26.052.354.145l3.085 3.065c.093.093.146.22.146.352v7.954a.498.498 0 01-.5.496h-1.679v-4.2a1.08 1.08 0 00-.32-.767 1.095 1.095 0 00-.77-.317H3.82c-.289 0-.566.114-.771.317a1.08 1.08 0 00-.32.767v4.2H1.5a.498.498 0 01-.5-.496V2.343zM3.73 13.86h6.091v-4.2a.09.09 0 00-.09-.09H3.82a.091.091 0 00-.09.09v4.2zm.182-9.929c0-.274.224-.497.5-.497h4.136c.277 0 .5.223.5.497a.498.498 0 01-.5.497H4.412a.498.498 0 01-.5-.497z"
            fill="currentColor"
        />
    </svg>
);
