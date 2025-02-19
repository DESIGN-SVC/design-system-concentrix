import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Receipt = ({ ...props }: GenericIconProps) => (
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
        d="M3.98 7.228a.5.5 0 01.5-.5h7.041a.5.5 0 010 1H4.48a.5.5 0 01-.5-.5zM3.98 9.395a.5.5 0 01.5-.5h7.041a.5.5 0 010 1H4.48a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.042 3.937A.042.042 0 002 3.978v9.483l1.443-.722a.5.5 0 01.447 0l1.943.972 1.943-.972a.5.5 0 01.448 0l1.943.972 1.943-.972a.5.5 0 01.447 0l1.443.722V3.978a.042.042 0 00-.042-.041H2.042zm-.737-.695c.195-.196.46-.305.737-.305h11.916A1.042 1.042 0 0115 3.978V14.27a.5.5 0 01-.724.447l-1.943-.972-1.943.972a.5.5 0 01-.447 0L8 13.745l-1.943.972a.5.5 0 01-.447 0l-1.943-.972-1.943.972A.5.5 0 011 14.27V3.978c0-.276.11-.541.305-.736z"
        fill="currentColor"
      />
    </svg>
);
