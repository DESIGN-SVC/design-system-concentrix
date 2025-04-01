import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GitlabLogo = ({ ...props }: GenericIconProps) => (
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
        d="M3.53 3.529L2 9.253a.018.018 0 00.007.016l5.986 4.143a.012.012 0 00.007.002c.002 0 .005 0 .007-.002l5.986-4.143A.018.018 0 0014 9.261a.018.018 0 000-.008l-1.53-5.724-1.156 3.087a.5.5 0 01-.469.324H5.157a.5.5 0 01-.469-.324L3.53 3.529zm8.74-.746zm-8.819-.816a.753.753 0 01.743.483l.001.003L5.502 5.94h4.996l1.307-3.487.001-.003a.753.753 0 011.43.075l1.736 6.49a1.018 1.018 0 01-.398 1.068l-.006.005-5.993 4.147a1.014 1.014 0 01-1.15 0l-5.999-4.151a1.019 1.019 0 01-.397-1.069l.002-.011 1.732-6.479a.754.754 0 01.688-.558z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.376 6.265a.5.5 0 01.468-.325h2.92a.5.5 0 010 1h-2.573l-2.679 7.147a.5.5 0 11-.936-.35l2.8-7.472z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.734 6.44a.5.5 0 01.5-.5h2.92a.5.5 0 01.469.325l2.8 7.471a.5.5 0 01-.936.351L4.808 6.94H2.234a.5.5 0 01-.5-.5z"
        fill="currentcolor"
      />
    </svg>
);
