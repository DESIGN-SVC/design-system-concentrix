type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PlusCircle = ({ ...props }: GenericIconProps) => (
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
            d="M8 2a6 6 0 100 12A6 6 0 008 2zM1 8a7 7 0 1114 0A7 7 0 011 8z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.9 8a.5.5 0 01.5-.5h5.2a.5.5 0 010 1H5.4a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 11.1a.5.5 0 01-.5-.5V5.4a.5.5 0 011 0v5.2a.5.5 0 01-.5.5z"
            fill="currentColor"
        />
    </svg>
);
