import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const WindowsLogo = ({ ...props }: GenericIconProps) => (
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
            d="M8.09 9.372a.5.5 0 01.5-.5h5.91a.5.5 0 01.5.5v5.318a.5.5 0 01-.59.492l-5.908-1.07a.5.5 0 01-.411-.493V9.372zm1 .5v3.33l4.91.89v-4.22H9.09zM1 9.372a.5.5 0 01.5-.5h4.727a.5.5 0 01.5.5v3.811a.5.5 0 01-.589.492l-4.727-.856A.5.5 0 011 12.327V9.372zm1 .5v2.037l3.727.676V9.872H2zM14.82 1.307a.5.5 0 01.18.383V7.01a.5.5 0 01-.5.5H8.59a.5.5 0 01-.5-.5V2.76a.5.5 0 01.412-.492L14.41 1.2a.5.5 0 01.41.108zM9.09 3.179v3.33H14v-4.22l-4.91.89zM6.548 2.813a.5.5 0 01.18.384V7.01a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5V4.054a.5.5 0 01.41-.492l4.728-.857a.5.5 0 01.41.108zM2 4.472v2.037h3.727V3.796L2 4.472z"
            fill="currentColor"
        />
    </svg>
);
