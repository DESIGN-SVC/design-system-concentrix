import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Shield = ({ ...props }: GenericIconProps) => (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.337 1.118a.066.066 0 00-.066.066v4.153c0 5.59 4.731 7.452 5.712 7.777l.006.002a.034.034 0 00.022 0l.005-.002c.982-.325 5.713-2.187 5.713-7.777V1.184a.066.066 0 00-.066-.066H1.337zM.583.43c.2-.2.471-.312.754-.312h11.326a1.066 1.066 0 011.066 1.066v4.153c0 6.3-5.355 8.38-6.396 8.725-.216.074-.45.074-.667 0-1.04-.345-6.395-2.426-6.395-8.725V1.184C.27.901.383.63.583.43z"
        fill="currentColor"
      />
    </svg>
);
