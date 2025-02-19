import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CurrencyEur = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.643 1.137a4.96 4.96 0 00-2.829.275A4.877 4.877 0 003.62 3.188a4.77 4.77 0 00-.823 2.674v2.364c0 .951.286 1.882.823 2.674.537.792 1.3 1.41 2.194 1.776a4.96 4.96 0 002.83.275 4.915 4.915 0 002.505-1.32.5.5 0 01.702.712 5.915 5.915 0 01-3.015 1.59 5.96 5.96 0 01-3.4-.331 5.876 5.876 0 01-2.644-2.141 5.77 5.77 0 01-.995-3.235V5.862a5.77 5.77 0 01.995-3.235A5.877 5.877 0 015.436.486a5.96 5.96 0 013.4-.33 5.915 5.915 0 013.015 1.59.5.5 0 01-.702.711 4.915 4.915 0 00-2.506-1.32z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.918a.5.5 0 01.5-.5h7.189a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM0 8.308a.5.5 0 01.5-.5h5.99a.5.5 0 110 1H.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
