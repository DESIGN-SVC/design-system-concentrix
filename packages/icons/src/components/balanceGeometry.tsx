import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const BalanceGeometry = ({ ...props }: GenericIconProps) => (
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
        d="M8.279 8.666l3.475 5.793h-6.95l3.475-5.793zm-1.71 4.793h3.419l-1.71-2.849L6.57 13.46z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.658 6.667L2.216 10.815l-.317-.949L14.342 5.72l.316.948zM.865 6.55l2.91-.991.99 2.91-2.909.99-.99-2.91zm1.27.624L2.48 8.19l1.016-.346-.346-1.016-1.017.346zM10.884 2.601l3.195 2.644-4.172 1.387.977-4.03zm.42 2.513l.748-.249-.573-.473-.175.722z"
        fill="currentColor"
      />
    </svg>
);
