import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShuffleAngular = ({ ...props }: GenericIconProps) => (
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
            d="M0 2.36a.5.5 0 01.5-.5h3.372a1.02 1.02 0 01.83.427l4.89 6.844a.02.02 0 00.016.009H13.5a.5.5 0 010 1H9.608a1.021 1.021 0 01-.83-.427l-4.89-6.845a.02.02 0 00-.016-.008H.5a.5.5 0 01-.5-.5zM11.586.446a.5.5 0 01.707 0l1.56 1.56a.5.5 0 010 .707l-1.56 1.56a.5.5 0 01-.707-.707l1.206-1.206-1.206-1.207a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.586 7.726a.5.5 0 01.707 0l1.56 1.56a.5.5 0 010 .707l-1.56 1.56a.5.5 0 11-.707-.707l1.206-1.206-1.206-1.207a.5.5 0 010-.707zM9.607 2.86a.02.02 0 00-.016.008L8.424 4.501a.5.5 0 01-.813-.581l1.166-1.633a1.02 1.02 0 01.83-.427H13.5a.5.5 0 110 1H9.607zM5.753 7.382a.5.5 0 01.116.698L4.702 9.713l-.406-.29.406.29a1.02 1.02 0 01-.83.427H.5a.5.5 0 110-1h3.372a.02.02 0 00.017-.009l1.166-1.633a.5.5 0 01.698-.116z"
            fill="currentColor"
        />
    </svg>
);
