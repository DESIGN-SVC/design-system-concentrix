import { cva, cx } from "cva";

export const twRoot = cx(['flex items-center justify-center gap-2', 'w-fit'])

export const twLabel = cx('select-none text-gray-100 font-normal text-sm cursor-pointer peer-disabled:cursor-not-allowed')

export const twInput = cva([
    'aspect-square w-4',
    'border border-primary rounded-[2px]',
    'relative appearance-none cursor-pointer peer',
    'duration-300 ease-in-out',
    'checked:bg-st-100',
    "before:absolute before:left-1/2 before:-translate-x-1/2 before:scale-50",
    "before:block before:opacity-0 before:z-10 ",
    "before:ease-in before:duration-200 ",
    "checked:before:scale-100",
    'disabled:before:hidden disabled:bg-gray-10 disabled:border-gray-40 disabled:cursor-not-allowed'
], {
    variants: {
        state: {
            intermediate: [
                'before:h-[2px] before:w-0',
                'before:top-1/2 before:-translate-y-1/2',
                'before:bg-primary before:rounded-3xl',
                'checked:before:border-0 checked:before:opacity-100 checked:before:w-2'
            ],
            selected: [
                'before:top-[1px] before:w-[5px] before:h-[9px]',
                'before:rotate-0 before:origin-[center_center]',
                'before:border-[length:0_0.100em_0.100em_0] before:border-primary',
                'checked:before:opacity-100 checked:before:rotate-45'
            ]
        }
    },
    defaultVariants:{
        state:'selected'
    }
})