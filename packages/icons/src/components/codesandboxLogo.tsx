import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CodesandboxLogo = ({ ...props }: GenericIconProps) => (
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
            d="M7.516 1.32a.974.974 0 01.969 0l5.353 3.01a.993.993 0 01.503.859V11.19h-.5l.5.002a.992.992 0 01-.503.858l-.002.001-5.351 3.01a.974.974 0 01-.969 0l-5.352-3.01h-.001a.992.992 0 01-.503-.859V5.19a.993.993 0 01.503-.858l.001-.001 5.352-3.01zm5.825 9.863V5.198L8 2.194 2.66 5.198v5.985L8 14.187l5.34-3.004z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.79 4.699a.5.5 0 01.68-.194l5.582 3.112 5.474-3.11a.5.5 0 01.494.87L8.302 8.625a.5.5 0 01-.49.002L1.982 5.38a.5.5 0 01-.193-.68z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.059 7.69a.5.5 0 01.496.505L8.5 14.692a.5.5 0 01-1-.008l.055-6.498a.5.5 0 01.504-.496zM4.583 3.048a.5.5 0 01.681-.19L8 4.397l2.735-1.54a.5.5 0 11.49.87l-2.98 1.68a.5.5 0 01-.49 0l-2.982-1.68a.5.5 0 01-.19-.68zM14.276 7.878a.5.5 0 01-.19.68l-2.666 1.5v3.06a.5.5 0 11-1 0V9.766a.5.5 0 01.255-.436l2.92-1.643a.5.5 0 01.68.191zM1.723 7.878a.5.5 0 01.681-.19l2.92 1.642a.5.5 0 01.255.436v3.352a.5.5 0 01-1 0v-3.06l-2.665-1.5a.5.5 0 01-.19-.68z"
            fill="currentColor"
        />
    </svg>
);
