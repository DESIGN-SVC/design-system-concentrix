import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ClipboardText = ({ ...props }: GenericIconProps) => (
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
        d="M5.42 10.343a.5.5 0 01.5-.5h.625a.5.5 0 110 1H5.92a.5.5 0 01-.5-.5zM5.42 8.263a.5.5 0 01.5-.5h2.42a.5.5 0 010 1H5.92a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.32 3.563a.02.02 0 00-.02.02v10.92c0 .005.002.01.006.014a.02.02 0 00.014.006h9.36a.02.02 0 00.014-.006.02.02 0 00.006-.014.5.5 0 111 0 1.02 1.02 0 01-1.02 1.02H3.32a1.02 1.02 0 01-1.02-1.02V3.583a1.02 1.02 0 011.02-1.02h2.6a.5.5 0 110 1h-2.6zm6.26-.5a.5.5 0 01.5-.5h2.6a1.02 1.02 0 011.02 1.02v1.2a.5.5 0 01-1 0v-1.2a.02.02 0 00-.006-.014.02.02 0 00-.014-.006h-2.6a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.905 7.697L9.5 11.1v1.001h1.001l3.405-3.404-1.001-1.001zm-.527-.888a.744.744 0 011.053 0l.394.394.969.969m0 0a.744.744 0 010 1.052l-3.732 3.732a.5.5 0 01-.354.146H9.244a.744.744 0 01-.744-.744v-1.363a.744.744 0 01.218-.526l3.66-3.66m2.416 1.363L13.43 6.809l1.363 1.363zm-.969-.969l-.394-.394.394.394z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.139 8.05a.5.5 0 01.707 0l1.708 1.708a.5.5 0 01-.707.707l-1.708-1.708a.5.5 0 010-.707zM8 2.523a2.1 2.1 0 00-2.1 2.1v.02h4.2v-.02a2.1 2.1 0 00-2.1-2.1zM5.806 2.43A3.1 3.1 0 0111.1 4.623v.52a.5.5 0 01-.5.5H5.4a.5.5 0 01-.5-.5v-.52a3.1 3.1 0 01.908-2.192z"
        fill="currentColor"
      />
    </svg>
);
