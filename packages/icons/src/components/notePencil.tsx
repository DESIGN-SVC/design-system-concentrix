import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const NotePencil = ({ ...props }: GenericIconProps) => (
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
        d="M11.885 1.465a.5.5 0 01.707 0l2.261 2.261a.5.5 0 010 .707L8.07 11.216a.5.5 0 01-.353.146h-2.26a.5.5 0 01-.5-.5v-2.26a.5.5 0 01.146-.354l6.782-6.783zM5.956 8.81v1.553H7.51l6.282-6.282-1.553-1.554-6.283 6.283z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.19 3.161a.5.5 0 01.708 0l2.26 2.261a.5.5 0 01-.707.707l-2.26-2.26a.5.5 0 010-.708z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.065 2.884A.065.065 0 002 2.95v11.305a.066.066 0 00.065.065H13.37a.065.065 0 00.065-.065V8.036a.5.5 0 111 0v6.218a1.065 1.065 0 01-1.065 1.065H2.065A1.065 1.065 0 011 14.254V2.949a1.065 1.065 0 011.065-1.065h6.218a.5.5 0 110 1H2.065z"
        fill="currentColor"
      />
    </svg>
);
