import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PaintRoller = ({ ...props }: GenericIconProps) => (
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
        d="M3.393 3.631v4.004h8.75V3.632h-8.75zm-1 0c0-.516.397-1 .964-1h8.821c.567 0 .965.484.965 1v4.004c0 .517-.398 1-.965 1H3.357c-.567 0-.964-.483-.964-1V3.632z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.143 5.6a.5.5 0 01.5-.5h1.393c.268 0 .517.115.694.306.177.19.27.44.27.694v3.122c0 .209-.063.415-.184.588a.965.965 0 01-.506.371L8.5 11.968V14.1a.5.5 0 01-1 0v-2.123c0-.208.063-.415.184-.588a.965.965 0 01.506-.37L14 9.23V6.1h-1.357a.5.5 0 01-.5-.5zM1 5.6a.5.5 0 01.5-.5h1.393a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
