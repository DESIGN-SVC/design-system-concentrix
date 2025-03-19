import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Shuffle = ({ ...props }: GenericIconProps) => (
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
        d="M0 2.36a.5.5 0 01.5-.5H2A4.66 4.66 0 015.79 3.81l2.711 3.796a3.66 3.66 0 002.979 1.533H13.5a.5.5 0 110 1h-2.02A4.66 4.66 0 017.69 8.188L4.977 4.393A3.66 3.66 0 002 2.86H.5a.5.5 0 01-.5-.5zM11.586.446a.5.5 0 01.707 0l1.56 1.56a.5.5 0 010 .707l-1.56 1.56a.5.5 0 11-.707-.707l1.206-1.206-1.206-1.207a.5.5 0 010-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.586 7.726a.5.5 0 01.707 0l1.56 1.56a.5.5 0 010 .707l-1.56 1.56a.5.5 0 11-.707-.707l1.206-1.206-1.206-1.207a.5.5 0 010-.707zM11.481 2.86a3.66 3.66 0 00-2.978 1.533l-.407-.291.407.29-.078.11a.5.5 0 01-.813-.582l.077-.109a4.66 4.66 0 013.792-1.951h2.02a.5.5 0 010 1h-2.02zM5.055 7.498a.5.5 0 01.814.582l-.078.108A4.66 4.66 0 012 10.14H.5a.5.5 0 010-1H2a3.66 3.66 0 002.977-1.533l.407.29-.407-.29.078-.109z"
        fill="currentColor"
      />
    </svg>
);
