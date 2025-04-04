import { VariantProps } from "cva";
import { ComponentProps } from "react";
import {tw} from './button.style'


type RootProps = { width?: number } & ComponentProps<"button"> &
    VariantProps<typeof tw>;

export const Root = ({
    className,
    width,
    appearance,
    size,
    ...props
}: RootProps) => (
    <button
        style={{ width }}
        className={tw({ className, appearance, size })}
        {...props}
    />
);

export const Text = ({ ...props }: ComponentProps<"p">) => <p {...props} />;
export const Icon = ({ ...props }: ComponentProps<"span">) => (
    <span {...props} />
);
