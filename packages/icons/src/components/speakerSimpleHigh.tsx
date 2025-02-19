import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SpeakerSimpleHigh = ({ ...props }: GenericIconProps) => (
    <svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.733.312a.5.5 0 01.277.447v13a.5.5 0 01-.8.4l-4.92-3.692H1.086c-.276 0-.544-.105-.744-.299a1.032 1.032 0 01-.318-.743V5.092c0-.282.117-.549.318-.743.2-.193.468-.299.744-.299h3.202L9.21.36a.5.5 0 01.524-.047zM9.01 1.759L4.756 4.95a.5.5 0 01-.3.1h-3.37a.072.072 0 00-.049.019c-.01.01-.012.018-.012.023v4.333c0 .006.002.014.012.024s.028.018.05.018h3.369a.5.5 0 01.3.1L9.01 12.76v-11zM11.507 5.2a.5.5 0 01.5.499l.003 3.119a.5.5 0 01-1 0L11.007 5.7a.5.5 0 01.5-.5zM13.506 4.159a.5.5 0 01.502.498l.017 5.201a.5.5 0 01-1 .004l-.017-5.201a.5.5 0 01.498-.502z"
            fill="currentColor"
        />
    </svg>
);
