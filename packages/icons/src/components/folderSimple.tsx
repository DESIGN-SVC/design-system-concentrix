import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FolderSimple= ({ ...props }: GenericIconProps) => (
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
        d="M2.042 3.919A.042.042 0 002 3.961v9.208a.042.042 0 00.042.042H14V5.586a.042.042 0 00-.042-.042H8.181c-.226 0-.445-.073-.625-.208L5.678 3.927a.042.042 0 00-.025-.008H2.042zm-.737-.695c.195-.195.46-.305.737-.305h3.61c.226 0 .445.073.626.208l1.878 1.409a.042.042 0 00.025.008h5.777A1.042 1.042 0 0115 5.586v7.643a.981.981 0 01-.982.982H2.042A1.041 1.041 0 011 13.169V3.96c0-.277.11-.542.305-.737z"
        fill="currentColor"
      />
    </svg>
);
