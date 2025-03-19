import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GameController = ({ ...props }: GenericIconProps) => (
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
        d="M8.893 6.952a.5.5 0 01.5-.5h1.857a.5.5 0 110 1H9.393a.5.5 0 01-.5-.5zM4.25 6.952a.5.5 0 01.5-.5h1.857a.5.5 0 010 1H4.75a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.678 5.523a.5.5 0 01.5.5V7.88a.5.5 0 11-1 0V6.023a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.555 3.418a3.518 3.518 0 010 7.036l-3.549.014-2.353 2.601a2.125 2.125 0 01-3.621-1.844l.002-.008.945-4.863.003-.014a3.519 3.519 0 013.464-2.906h-.001l.001.5v-.5m5.109-.016v.5-.5zm0 1l-5.107.016h-.002a2.519 2.519 0 00-2.48 2.089l-.95 4.88a1.125 1.125 0 001.895.996l2.502-2.765a.5.5 0 01.368-.165l3.772-.015h.002a2.518 2.518 0 000-5.036z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.432 5.921a.5.5 0 01.586.396l.95 4.908a2.125 2.125 0 01-3.622 1.843l-2.499-2.774a.5.5 0 01.743-.67l2.5 2.775a1.125 1.125 0 001.894-.997l-.948-4.895a.5.5 0 01.396-.586z"
        fill="currentColor"
      />
    </svg>
);
