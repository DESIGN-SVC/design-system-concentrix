import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const StackOverflowLogo = ({ ...props }: GenericIconProps) => (
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
            d="M2.354 9.674a.5.5 0 01.5.5v4.017h10.291v-4.017a.5.5 0 011 0v4.517a.5.5 0 01-.5.5H2.354a.5.5 0 01-.5-.5v-4.517a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.677 11.868a.5.5 0 01.5-.5h5.646a.5.5 0 110 1H5.177a.5.5 0 01-.5-.5zM5.188 8.012a.5.5 0 01.613-.354l5.448 1.461a.5.5 0 11-.26.966l-5.447-1.46a.5.5 0 01-.354-.613zM6.67 4.42a.5.5 0 01.684-.184l4.89 2.823a.5.5 0 11-.5.866l-4.89-2.823a.5.5 0 01-.183-.683zM9.044 1.337a.5.5 0 01.707 0l3.988 3.987a.5.5 0 01-.708.707L9.044 2.044a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
