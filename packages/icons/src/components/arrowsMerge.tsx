import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsMerge = ({ ...props }: GenericIconProps) => (
    <svg
        width={10}
        height={12}
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.192 11.465a.2.2 0 00.283 0l.657-.657a.2.2 0 000-.283l-1.99-1.99a.2.2 0 00-.284 0l-.657.657a.2.2 0 000 .283l1.99 1.99zm-5.85-8.473a.2.2 0 00.14.341h1.651c.11 0 .2.09.2.2v3.444a.2.2 0 01-.058.142L.868 10.525a.2.2 0 000 .283l.657.657a.2.2 0 00.283 0l3.8-3.8a.2.2 0 00.059-.141v-3.99c0-.111.09-.2.2-.2h1.65a.2.2 0 00.141-.342L5.141.475a.2.2 0 00-.283 0L2.341 2.992z"
            fill="currentColor"
        />
    </svg>
);
