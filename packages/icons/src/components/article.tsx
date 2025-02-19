import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Article = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.043 2.017a.22.22 0 00-.043.14v11.686a.22.22 0 00.043.14.094.094 0 00.01.01h11.894a.098.098 0 00.01-.01.22.22 0 00.043-.14V2.156a.22.22 0 00-.043-.139.091.091 0 00-.01-.01H2.053a.088.088 0 00-.01.01zm.014-.013h-.002.002zm11.886 0h.002-.002zm0 11.992l.002-.001h-.002zm-11.886 0l-.002-.001h.002zM1 2.156c0-.546.385-1.15 1.042-1.15h11.916c.657 0 1.042.604 1.042 1.15v11.687c0 .546-.385 1.15-1.042 1.15H2.042c-.657 0-1.042-.604-1.042-1.15V2.156z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.98 4.837a.5.5 0 01.5-.5h7.041a.5.5 0 010 1H4.48a.5.5 0 01-.5-.5zM3.98 8a.5.5 0 01.5-.5h7.041a.5.5 0 010 1H4.48a.5.5 0 01-.5-.5zM3.98 11.162a.5.5 0 01.5-.5h7.041a.5.5 0 010 1H4.48a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
