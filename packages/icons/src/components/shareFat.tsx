import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShareFat = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.81.038a.5.5 0 01.544.108l4.5 4.5a.5.5 0 01-.047.749l-4.5 3.5A.5.5 0 018.5 8.5V7.02c-.06.01-.122.019-.185.027-.842.12-1.86.266-2.949.864-1.403.772-2.914 2.329-3.885 5.726a.5.5 0 01-.97-.039C-.505 8.528.346 5.567 2.232 3.91 3.94 2.411 6.365 2.111 8.5 2.075V.5a.5.5 0 01.31-.462zm.69 1.67v.863a.5.5 0 01-.5.5c-2.252 0-4.574.243-6.107 1.59-1.28 1.125-2.124 3.133-1.71 6.805 1.008-2.37 2.347-3.685 3.701-4.43 1.27-.7 2.565-.881 3.412-1 .24-.034.442-.063.6-.096a.5.5 0 01.604.489v1.049l3.246-2.525L9.5 1.707z"
            fill="currentColor"
        />
    </svg>
);
