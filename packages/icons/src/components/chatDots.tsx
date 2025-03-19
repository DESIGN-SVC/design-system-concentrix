import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChatDots = ({ ...props }: GenericIconProps) => (
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
        d="M2.042 3.104A.042.042 0 002 3.146V13.9a.041.041 0 00.024.038.042.042 0 00.044-.006l2.18-1.833c.189-.158.426-.245.671-.245h9.04a.042.042 0 00.041-.041V3.146a.042.042 0 00-.042-.042H2.042zm-.737-.694c.195-.196.46-.306.737-.306h11.916A1.042 1.042 0 0115 3.146v8.667a1.042 1.042 0 01-1.042 1.041H4.92c-.01 0-.02.004-.027.01l-2.18 1.833A1.041 1.041 0 011 13.9V3.146c0-.276.11-.541.305-.736z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 8.251a.75.75 0 100-1.5.75.75 0 000 1.5zm2.5 0a.75.75 0 100-1.5.75.75 0 000 1.5zm3.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        fill="currentColor"
      />
    </svg>
);
