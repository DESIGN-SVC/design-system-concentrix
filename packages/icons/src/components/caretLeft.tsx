import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretLeft = ({ ...props }: GenericIconProps) => (
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
            d="M12.03 1.692a.5.5 0 01-.042.706L5.096 8.524l6.892 6.126a.5.5 0 01-.664.748l-7.312-6.5a.5.5 0 010-.748l7.312-6.5a.5.5 0 01.706.042z"
            fill="currentColor"
        />
    </svg>
);
