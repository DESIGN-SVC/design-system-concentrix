import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Code = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.67 3.881a.5.5 0 01-.064.704L1.28 6.523 3.606 8.46a.5.5 0 11-.64.768L.18 6.907a.5.5 0 010-.769l2.786-2.32a.5.5 0 01.704.063zM10.33 3.881a.5.5 0 01.704-.064l2.786 2.321a.5.5 0 010 .769l-2.786 2.321a.5.5 0 01-.64-.768l2.325-1.937-2.325-1.938a.5.5 0 01-.064-.704zM9.028.946a.5.5 0 01.299.64L5.613 11.802a.5.5 0 01-.94-.342L8.387 1.245a.5.5 0 01.64-.3z"
            fill="currentColor"
        />
    </svg>
);
