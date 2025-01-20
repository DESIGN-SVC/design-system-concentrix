import React from "react";
import { ComponentPropsWithRef, forwardRef } from "react";
type ContentProps = {
  title: string;
  description: string;
  showCloseBtn?: React.ReactNode;
  toastType?: "success" | "info" | "warning" | "error";
  onClose?: () => void;
} & ComponentPropsWithRef<"li">;

export const Content = forwardRef<HTMLLIElement, ContentProps>(
  (
    {
      toastType = "info",
      title,
      description,
      className,
      showCloseBtn,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow">
        teste
      </div>
    );
  }
);
