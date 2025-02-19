import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChatQueue = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={12}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3.013v1.394a.5.5 0 001 0V2.826a.782.782 0 00-.31-.615.962.962 0 00-.59-.198H3.4a.962.962 0 00-.59.198.782.782 0 00-.31.615V7.2c0 .26.133.477.31.615a.962.962 0 00.59.197h1.2a.5.5 0 100-1H3.5v-4h7z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 1.001v1.394a.5.5 0 001 0V.813a.782.782 0 00-.31-.615.962.962 0 00-.59-.197H1.4a.962.962 0 00-.59.197.782.782 0 00-.31.615v4.375c0 .261.133.478.31.615a.962.962 0 00.59.198h1.2a.5.5 0 000-1H1.5v-4h7z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 5v5.5l-1.4-1.048a.5.5 0 00-.3-.1H5.5V5h7zm.71-.747A.963.963 0 0012.556 4H5.444a.963.963 0 00-.654.253.897.897 0 00-.29.658v4.53c0 .254.11.49.29.658.18.166.416.253.654.253h5.19L12.7 11.9a.5.5 0 00.8-.4V4.91c0-.254-.11-.49-.29-.658z"
        fill="currentColor"
      />
    </svg>
);
