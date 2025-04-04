import { cva } from "cva";

export const tw = cva(
    [
        "flex items-center justify-center gap-2",
        "font-semibold",
        "px-4",
        "rounded-3xl cursor-pointer relative",
        "duration-300 ease-in-out",
        "disabled:cursor-not-allowed",
    ],
    {
        variants: {
            appearance: {
                primary: [
                    "text-white",
                    "bg-primary outline-none border-2 border-primary",
                    "hover:bg-secondary hover:border-secondary",
                    "focus:bg-secondary focus:border-secondary",
                    "active:bg-secondary active:border-primary",
                    "disabled:text-gray-40 disabled:bg-gray-20 disabled:border-gray-20",
                ],
                secondary: [
                    'bg-transparent border-2 border-transparent outline-1 outline-primary',
                    'text-primary',
                    'hover:bg-st-10',
                    'focus:bg-st-10',
                    'active:border-primary active:outline-transparent',
                    "disabled:text-gray-40 disabled:outline-gray-20",
                    'disabled:active:border-transparent disabled:hover:bg-transparent disabled:focus:bg-none'
                ],
                ghost: [
                    'text-primary',
                    'focus:text-secondary hover:text-secondary',
                    'active:text-primary',
                    'before:content-[""] before:absolute before:bottom-1.5 before:',
                    'before:h-[1px] before:w-0 before:bg-secondary',
                    'before:duration-300 before:ease-in-out',
                    'hover:before:w-[calc(100%_-32px)]',
                    'disabled:text-gray-40 disabled:before:w-0'
                ]
            },
            size: {
                small: 'h-8 text-xs',
                medium: "h-10 text-sm",
                large: 'h-12 text-base'
            },
        },
        defaultVariants: {
            appearance: "primary",
            size: "medium",
        },
    }
);