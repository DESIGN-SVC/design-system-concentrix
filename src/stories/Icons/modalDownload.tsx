import { Slot } from "@radix-ui/react-slot";
import { cx } from "cva";
import { ComponentProps, ReactNode } from "react";

import { downloadPNG, downloadSVG } from "./utils";

type ModalDownloadProps = {
    isOpen?: boolean;
    name: string;
    icon: ReactNode;
    color: string;
    size: number;
    tags: string[];
    onTag: ({ tag }: { tag: string }) => void;
};

export const ModalDownload = ({
    isOpen,
    name,
    icon,
    color,
    size,
    tags,
    onTag,
}: ModalDownloadProps) => {
    return (
        <div
            id="modal-icon-download"
            data-hidden={isOpen}
            className={cx([
                "border rounded-md bg-gray-50 border-gray-200",
                "w-0 pointer-events-none",
                "ease-in-out duration-300",
                "absolute bottom-full left-full",
                "data-[hidden=true]:w-full data-[hidden=true]:h-auto data-[hidden=true]:max-w-2xl data-[hidden=true]:mx-auto",
                "data-[hidden=true]:left-auto data-[hidden=true]:bottom-auto ",
                "data-[hidden=true]:relative data-[hidden=true]:pointer-events-auto",
            ])}
        >
            <h5 className="text-lg font-medium text-center w-full py-2 text-[#003D5B]">
                {name}
            </h5>
            <div
                className={cx([
                    "px-5 py-2",
                    "bg-white rounded-b-md divide-x divide-gray-200",
                    "flex gap-3",
                ])}
            >
                <div className="pr-2 flex items-center justify-center">
                    <Slot
                        className="w-10 h-10"
                        style={{
                            color: color,
                        }}
                    >
                        {icon}
                    </Slot>
                </div>
                <div className="flex-1  py-2 space-y-2">
                    <h6 className="text-xs font-medium border-b border-gray-200 pb-1">
                        Download
                    </h6>
                    <div className="flex gap-3 items-center py-2">
                        <ButtonDownload
                            onClick={() =>
                                downloadSVG({
                                    color,
                                    Component: icon,
                                    name,
                                    width: size,
                                    height: size,
                                })
                            }
                        >
                            svg
                        </ButtonDownload>
                        <ButtonDownload
                            onClick={() =>
                                downloadPNG({
                                    color,
                                    Component: icon,
                                    name,
                                    width: size,
                                    height: size,
                                })
                            }
                        >
                            png
                        </ButtonDownload>
                    </div>
                    <h6 className="text-xs font-medium border-b border-gray-200 pb-1">
                        Tags
                    </h6>
                    <div className="flex flex-wrap  gap-3 items-center py-2">
                        {tags.map((el) => (
                            <button
                                key={el}
                                onClick={() => onTag({ tag: el })}
                                className={cx([
                                    "text-xs text-white",
                                    "bg-primary rounded-lg cursor-pointer",
                                    "px-2 py-1",
                                    "duration-300 ease-in-out",
                                    "hover:bg-secondary",
                                ])}
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
const ButtonDownload = ({ ...props }: ComponentProps<"button">) => (
    <button
        className={cx([
            "px-2 py-1",
            "cursor-pointer rounded border border-gray-200",
            "text-sm",
            "duration-300 ease-in",
            "hover:bg-gray-50 hover:font-medium",
        ])}
        {...props}
    />
);



