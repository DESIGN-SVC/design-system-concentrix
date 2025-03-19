import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Printer = ({ ...props }: GenericIconProps) => (
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
        d="M3.34 2.811a.5.5 0 01.5-.5h8.32a.5.5 0 01.5.5v2.6a.5.5 0 11-1 0v-2.1H4.34v2.1a.5.5 0 11-1 0v-2.6zM3.34 10.09a.5.5 0 01.5-.5h8.32a.5.5 0 01.5.5v4.42a.5.5 0 01-.5.5H3.84a.5.5 0 01-.5-.5v-4.42zm1 .5v3.42h7.32v-3.42H4.34z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.627 5.911c-.385 0-.627.279-.627.54v4.7h1.84a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5v-5.2c0-.887.767-1.54 1.627-1.54h10.746c.86 0 1.627.653 1.627 1.54v5.2a.5.5 0 01-.5.5h-2.34a.5.5 0 110-1H14v-4.7c0-.261-.242-.54-.627-.54H2.627z"
        fill="currentColor"
      />
      <path d="M12.16 7.881a.39.39 0 100-.78.39.39 0 000 .78z" fill="currentColor" />
    </svg>
);
