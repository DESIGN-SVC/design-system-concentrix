import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Envelope = ({ ...props }: GenericIconProps) => (
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
        d="M1.131 3.106a.5.5 0 01.707-.03L8 8.723l6.162-5.649a.5.5 0 01.676.737l-6.5 5.959a.5.5 0 01-.676 0l-6.5-5.959a.5.5 0 01-.03-.706z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.444a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9.208a1.042 1.042 0 01-1.042 1.042H2.042A1.042 1.042 0 011 12.652V3.444zm1 .5v8.708a.042.042 0 00.042.042h11.916a.042.042 0 00.042-.042V3.944H2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.187 7.981a.5.5 0 01-.031.706L2.005 13.41a.5.5 0 11-.676-.737L6.48 7.95a.5.5 0 01.707.031zM8.813 7.981a.5.5 0 01.707-.03l5.15 4.721a.5.5 0 01-.675.737L8.844 8.687a.5.5 0 01-.03-.706z"
        fill="currentColor"
      />
    </svg>
);
