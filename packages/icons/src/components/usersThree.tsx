import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const UsersThree = ({ ...props }: GenericIconProps) => (
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
            d="M8.082 4.311a.91.91 0 100 1.819.91.91 0 000-1.819m-1.91.909a1.91 1.91 0 013.819.002 1.91 1.91 0 01-3.818-.002zM9.537 8.209h.016a2.381 2.381 0 010 4.76H6.615a2.381 2.381 0 010-4.76h2.922zm-2.898 1a1.381 1.381 0 000 2.76h2.89a1.381 1.381 0 000-2.76h-2.89zM11.978 5.721a.578.578 0 100 1.156.578.578 0 000-1.156zM10.4 6.3a1.578 1.578 0 113.156 0 1.578 1.578 0 01-3.156 0zM2.443 6.3a1.578 1.578 0 113.156 0 1.578 1.578 0 01-3.156 0zm1.578-.578a.578.578 0 100 1.156.578.578 0 000-1.156z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.909 8.622h.808a.5.5 0 010 1h-.803a.938.938 0 000 1.876h.803a.5.5 0 010 1h-.819a1.938 1.938 0 010-3.876h.01zm8.874.5a.5.5 0 01.5-.5h.819a1.939 1.939 0 010 3.876H12.283a.5.5 0 110-1h.803a.938.938 0 000-1.876h-.803a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
