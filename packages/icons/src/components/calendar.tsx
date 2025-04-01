import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Calendar = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.583 3.606a.042.042 0 00-.042.042v10.833c0 .024.019.042.042.042h10.833a.042.042 0 00.042-.042V3.648a.042.042 0 00-.042-.042H2.583zm-1.042.042c0-.575.466-1.042 1.042-1.042h10.833c.575 0 1.042.467 1.042 1.042v10.833c0 .576-.467 1.042-1.042 1.042H2.583a1.042 1.042 0 01-1.042-1.042V3.648z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 1.523a.5.5 0 01.5.5V4.19a.5.5 0 01-1 0V2.023a.5.5 0 01.5-.5zM4.75 1.523a.5.5 0 01.5.5V4.19a.5.5 0 01-1 0V2.023a.5.5 0 01.5-.5zM1.541 6.356a.5.5 0 01.5-.5h11.917a.5.5 0 010 1H2.04a.5.5 0 01-.5-.5zM5.063 9.064a.5.5 0 01.5-.5h1.895a.5.5 0 01.39.813l-.628.786a1.582 1.582 0 11-1.964 2.46.5.5 0 11.707-.708.583.583 0 10.412-.996.5.5 0 01-.39-.813l.433-.542h-.856a.5.5 0 01-.5-.5zM10.39 8.617a.5.5 0 01.276.447v3.521a.5.5 0 01-1 0v-2.52l-.283.212a.5.5 0 01-.6-.8l1.083-.813a.5.5 0 01.524-.047z"
            fill="currentColor"
        />
    </svg>
);
