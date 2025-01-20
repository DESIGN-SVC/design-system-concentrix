import { cx } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { ComponentPropsWithRef } from "react";

const X = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5515 2.48009C14.7328 2.29877 14.7328 2.0048 14.5515 1.82349C14.3702 1.64217 14.0762 1.64217 13.8949 1.82349L8.1875 7.5309L2.48009 1.82349C2.29877 1.64217 2.0048 1.64217 1.82349 1.82349C1.64217 2.0048 1.64217 2.29877 1.82349 2.48009L7.5309 8.1875L1.82349 13.8949C1.64217 14.0762 1.64217 14.3702 1.82349 14.5515C2.0048 14.7328 2.29877 14.7328 2.48009 14.5515L8.1875 8.8441L13.8949 14.5515C14.0762 14.7328 14.3702 14.7328 14.5515 14.5515C14.7328 14.3702 14.7328 14.0762 14.5515 13.8949L8.8441 8.1875L14.5515 2.48009Z"
      fill="#2A2B2C"
    />
  </svg>
);

export const Blocked = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5ZM1 8.5C1 4.63401 4.13401 1.5 8 1.5C11.866 1.5 15 4.63401 15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5Z"
      fill="#CC3262"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.04977 3.55022C3.24503 3.35495 3.56161 3.35495 3.75687 3.55022L12.9493 12.7426C13.1445 12.9379 13.1445 13.2544 12.9493 13.4497C12.754 13.645 12.4374 13.645 12.2422 13.4497L3.04977 4.25732C2.8545 4.06206 2.8545 3.74548 3.04977 3.55022Z"
      fill="#CC3262"
    />
  </svg>
);

export const Check = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5ZM1 8.5C1 4.63401 4.13401 1.5 8 1.5C11.866 1.5 15 4.63401 15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5Z"
      fill="#178844"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5ZM1 8.5C1 4.63401 4.13401 1.5 8 1.5C11.866 1.5 15 4.63401 15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5Z"
      fill="black"
      fillOpacity="0.2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6789 5.84023C11.8741 6.0355 11.8741 6.35208 11.6789 6.54734L7.06644 11.1597C6.87118 11.355 6.5546 11.355 6.35934 11.1597L4.32027 9.12069C4.12501 8.92542 4.12501 8.60884 4.32027 8.41358C4.51554 8.21832 4.83212 8.21832 5.02738 8.41358L6.71289 10.0991L10.9717 5.84023C11.167 5.64497 11.4836 5.64497 11.6789 5.84023Z"
      fill="#178844"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6789 5.84023C11.8741 6.0355 11.8741 6.35208 11.6789 6.54734L7.06644 11.1597C6.87118 11.355 6.5546 11.355 6.35934 11.1597L4.32027 9.12069C4.12501 8.92542 4.12501 8.60884 4.32027 8.41358C4.51554 8.21832 4.83212 8.21832 5.02738 8.41358L6.71289 10.0991L10.9717 5.84023C11.167 5.64497 11.4836 5.64497 11.6789 5.84023Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

export const Info = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="currentColor"
    className="min-w-fit"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5ZM1 8.5C1 4.63401 4.13401 1.5 8 1.5C11.866 1.5 15 4.63401 15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5Z"
      fill="#2A2B2C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 7.24243V12.2424H7.5V7.24243H8.5Z"
      fill="#2A2B2C"
    />
    <path
      d="M8.74268 5.5C8.74268 5.91004 8.41028 6.24244 8.00025 6.24244C7.59021 6.24244 7.25781 5.91004 7.25781 5.5C7.25781 5.08997 7.59021 4.75757 8.00025 4.75757C8.41028 4.75757 8.74268 5.08997 8.74268 5.5Z"
      fill="#2A2B2C"
    />
  </svg>
);

export const Warning = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.75005C8.27614 6.75005 8.5 6.9739 8.5 7.25005V9.75062C8.5 10.0268 8.27614 10.2506 8 10.2506C7.72386 10.2506 7.5 10.0268 7.5 9.75062V7.25005C7.5 6.9739 7.72386 6.75005 8 6.75005Z"
      fill="#373C47"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2506 2.4496C7.47849 2.3182 7.73693 2.24902 8 2.24902C8.26306 2.24902 8.5215 2.3182 8.7494 2.4496C8.97729 2.58101 9.16662 2.77003 9.2984 2.9977L8.86567 3.24818L9.29841 2.9977L14.7982 12.4994C14.9302 12.7274 14.9998 12.9862 15 13.2497C15.0002 13.5132 14.931 13.7721 14.7994 14.0003C14.6678 14.2286 14.4784 14.4182 14.2502 14.55C14.0221 14.6818 13.7633 14.7512 13.4998 14.7512H2.50023C2.23674 14.7512 1.97791 14.6818 1.74976 14.55C1.52161 14.4182 1.3322 14.2286 1.20058 14.0003C1.06896 13.7721 0.999783 13.5132 1 13.2497C1.00022 12.9862 1.06983 12.7274 1.20182 12.4994L6.70159 2.9977L7.13799 3.2503L6.70159 2.9977C6.83337 2.77003 7.02271 2.58101 7.2506 2.4496ZM8 3.24902C7.91228 3.24902 7.82611 3.27209 7.75012 3.3159C7.67414 3.35972 7.61101 3.42274 7.56706 3.49866L2.06729 13.0003C2.02328 13.0764 2.00007 13.1627 2 13.2505C1.99993 13.3384 2.02299 13.4247 2.06688 13.5008C2.11077 13.5769 2.17392 13.6401 2.25 13.6841C2.32607 13.728 2.41238 13.7512 2.50023 13.7512H13.4998C13.5876 13.7512 13.6739 13.728 13.75 13.6841C13.8261 13.6401 13.8892 13.5769 13.9331 13.5008C13.977 13.4247 14.0001 13.3384 14 13.2505C13.9999 13.1627 13.9767 13.0764 13.9327 13.0003L8.43293 3.49866C8.38899 3.42274 8.32586 3.35972 8.24987 3.3159C8.17389 3.27209 8.08771 3.24902 8 3.24902Z"
      fill="#373C47"
    />
    <path
      d="M8.00014 12.6263C8.3454 12.6263 8.62529 12.3464 8.62529 12.0011C8.62529 11.6559 8.3454 11.376 8.00014 11.376C7.65489 11.376 7.375 11.6559 7.375 12.0011C7.375 12.3464 7.65489 12.6263 8.00014 12.6263Z"
      fill="#373C47"
    />
  </svg>
);

type ToastContextProps = {
  isVisible: boolean;
  toastPosition:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  showToast: () => void;
  removeToast: () => void;
};

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

type ToastProviderProps = {
  children: ReactNode;
  toastPosition?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
};

export const Provider = ({
  children,
  toastPosition = "bottom-right",
}: ToastProviderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <ToastContext.Provider
      value={{
        isVisible,
        toastPosition,
        showToast: () => setIsVisible(true),
        removeToast: () => setIsVisible(false),
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("No ToastProvider found.");
  }
  return context;
};

export const Trigger = ({ children }: { children: ReactNode }) => {
  const { showToast } = useToast();
  return <div onMouseDown={() => showToast()}>{children}</div>;
};

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const { isVisible, toastPosition } = useToast();
  const positionStyle = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-center": "top-4 right-1/2",
    "bottom-center": "bottom-4 right-1/2",
  };
  return (
    <ul
      data-state={isVisible ? "open" : "closed"}
      className={cx([
        "group fixed flex flex-col gap-4 -z-10",
        positionStyle[toastPosition],
        { "!z-[999]": isVisible },
      ])}
    >
      {children}
    </ul>
  );
};

export const Root = ({
  duration = 5000,
  onRemove,
  children,
}: {
  duration?: number;
  children: ReactNode;
  onRemove: () => void;
}) => {
  const { isVisible, toastPosition, removeToast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const toastRef = useRef<HTMLLIElement>(null);
  const id = useRef(Date.now());

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      removeToast();
      onRemove();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, removeToast, onRemove]);

  useEffect(() => {
    if (!isDragging) {
      const toastWidth = toastRef.current?.clientWidth ?? 0;

      const isOutOfBounds =
        (toastPosition?.includes("right") && positionX >= toastWidth) ||
        (toastPosition?.includes("left") && positionX <= -toastWidth) ||
        (toastPosition?.includes("center") &&
          Math.abs(positionX) >= toastWidth);

      if (isOutOfBounds) {
        removeToast();
      }

      setPositionX(0);
    }
  }, [isDragging, positionX, toastPosition, removeToast]);

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    setPositionX((prev) => {
      const deltaX = e.movementX;
      if (toastPosition?.includes("right")) return Math.max(prev + deltaX, 0);
      if (toastPosition?.includes("left")) return Math.min(prev + deltaX, 0);
      return prev + deltaX;
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isVisible) return null;

  return (
    <li
      ref={toastRef}
      id={`toast-${id.current}`}
      className={cx(
        "relative select-none transition-all duration-1000 ease-in-out",
        {
          "animate-slide-left group-data-[state=closed]:animate-slide-left": [
            "bottom-right",
            "top-right",
          ].includes(toastPosition),
          "animate-slide-right group-data-[state=closed]:animate-slide-right": [
            "bottom-left",
            "top-left",
          ].includes(toastPosition),
        }
      )}
      style={{
        transform: `translateX(${positionX}px)`,
        transition: isDragging ? "none" : "transform 0.3s ease",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </li>
  );
};

type ToastContentProps = {
  title: string;
  message: string;
  showCloseBtn?: boolean;
  toastType?: "success" | "info" | "warning" | "error";
} & ComponentPropsWithoutRef<"div">;

export const Content = ({
  title,
  message,
  showCloseBtn = true,
  toastType = "info",
  ...props
}: ToastContentProps) => {
  const { removeToast } = useToast();
  const styles = {
    root: cx([
      "w-full max-w-[24.5rem] p-4 text-black z-[999]",
      "rounded border border-l-4",
      "flex items-start justify-start gap-[0.625rem]",
    ]),
    toastStyle: {
      success: "bg-green-50 border-green-500 ",
      info: "bg-blue-60 border-gray-700",
      warning: "bg-orange-50 border-orange-500",
      error: "bg-pink-50 border-pink-400",
    },
  };

  const icon = {
    success: <Check />,
    info: <Info />,
    warning: <Warning />,
    error: <Blocked />,
  };

  return (
    <div className={cx(styles.root, styles.toastStyle[toastType])} {...props}>
      <div className="flex items-start gap-2">
        {icon.info}
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{message}</p>
        </div>
      </div>
      {showCloseBtn && (
        <button className="ml-auto" onClick={() => removeToast()}>
          <X />
        </button>
      )}
    </div>
  );
};
