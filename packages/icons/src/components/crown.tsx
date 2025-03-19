import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Crown = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            d="M3.037 12.52a.48.48 0 00.597.35 16.405 16.405 0 018.73 0 .482.482 0 00.597-.351l1.526-6.488a.48.48 0 00-.66-.548l-3.03 1.347a.48.48 0 01-.614-.205L8.42 3.45a.479.479 0 00-.838 0L5.817 6.625a.48.48 0 01-.613.205l-3.03-1.347a.48.48 0 00-.661.548l1.524 6.488zM6.084 10.463a18.326 18.326 0 013.833 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
