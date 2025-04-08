import { ComponentProps } from "react";
import { twInput, twLabel, twRoot } from "./checkbox.style";
import { VariantProps } from "cva";

export const Root = ({ className, ...props }: ComponentProps<"fieldset">) => (
    <fieldset className={twRoot} {...props} />
);

export const Label = ({ ...props }: ComponentProps<"label">) => (
    <label className={twLabel} {...props} />
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof twInput>;

export const Input = ({ state, ...props }: InputProps) => (
    <input type="checkbox" className={twInput({ state })} {...props} />
);
