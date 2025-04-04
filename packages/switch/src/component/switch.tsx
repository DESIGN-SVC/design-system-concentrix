import { cx } from "cva";
import { ComponentPropsWithRef, Ref } from "react";

type InputProps = {
    ref?: Ref<HTMLInputElement>;
} & ComponentPropsWithRef<"input">;

const switchClass = {
    root: cx(["cursor-pointer relative inline-block", "w-12 h-6"]),
    inputElement: cx("sr-only peer"),
    switchArea: cx([
        "cursor-pointer absolute",
        "rounded-full border-2 border-primary bg-white",
        "inset-0 peer-checked:bg-st-100",
        "transition-colors duration-200",
        "peer-disabled:border-gray-40 peer-disabled:bg-gray-20 peer-disabled:cursor-not-allowed",
        'peer-checked:peer-disabled:bg-st-20'
    ]),
    switchButton: cx([
        "absolute left-0 top-0 w-6 h-6 bg-primary rounded-full",
        "transition-transform duration-200 transform peer-checked:translate-x-6",
        "peer-disabled:bg-gray-40 peer-disabled:cursor-not-allowed ",
    ]),
};

export const Switch = ({ ref, ...props }: InputProps) => (
    <label className={switchClass.root}>
        <input
        
            type="checkbox"
            className={switchClass.inputElement}
            ref={ref}
            {...props}
        />
        <span className={switchClass.switchArea} />
        <span className={switchClass.switchButton} />
    </label>
);
