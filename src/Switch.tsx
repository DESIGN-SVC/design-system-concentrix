import { cx } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

type InputProps = {
  id: string;
  onValueChange?: () => void;
  isActive?: boolean;
} & ComponentPropsWithRef<"input">;

const SwitchClass = {
  root: "cursor-pointer relative inline-block w-12 h-6",
  inputElement: "sr-only peer",
  switchArea: [
    "cursor-pointer absolute",
    "rounded-full border-2 border-blue-800 bg-white",
    "inset-0 peer-checked:bg-aqua-300",
    "transition-colors duration-200",
    "peer-disabled:border-gray-40 peer-disabled:bg-gray-20 peer-disabled:cursor-not-allowed",
  ],
  switchButton: [
    "absolute left-0 top-0 w-6 h-6 bg-blue-800 rounded-full",
    "transition-transform duration-200 transform peer-checked:translate-x-6",
    "peer-disabled:bg-gray-40 peer-disabled:cursor-not-allowed",
  ],
};

export const Switch = forwardRef<HTMLInputElement, InputProps>(
  ({ onValueChange, isActive, ...props }, ref) => {
    const handleOnChange = () => {
      if (props.disabled || !onValueChange) return;
      onValueChange();
    };

    return (
      <label className={SwitchClass.root}>
        <input
          type="checkbox"
          checked={isActive ?? undefined}
          className={SwitchClass.inputElement}
          ref={ref}
          onChange={(e) => {
            if (isActive !== null && isActive !== undefined) {
              e.target.checked = isActive;
            }
            handleOnChange();
          }}
          {...props}
        />
        <span className={cx(SwitchClass.switchArea)} />
        <span className={cx(SwitchClass.switchButton)} />
      </label>
    );
  }
);
