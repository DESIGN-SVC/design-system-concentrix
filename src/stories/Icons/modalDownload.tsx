import { Slot } from "@radix-ui/react-slot";
import { cx } from "cva";
import { ComponentProps, ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

type ModalDownloadProps = {
    isOpen?: boolean;
    name: string;
    icon: ReactNode;
    color: string;
    size:number
};

export const ModalDownload = ({
    isOpen,
    name,
    icon,
    color,
    size
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
                "data-[hidden=true]:w-full ",
                "data-[hidden=true]:left-auto data-[hidden=true]:bottom-auto ",
                "data-[hidden=true]:relative data-[hidden=true]:pointer-events-auto",
            ])}
        >
            <h5 className="text-lg font-medium text-center w-full py-2">
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
                    <div className="flex gap-3 items-center">
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
type Download = {
    name: string;
    Component: ReactNode;
    color: string;
    width: number;
    height: number;
};

const downloadSVG = ({ Component, color, name, width, height }: Download) => {
    let svgString = ReactDOMServer.renderToStaticMarkup(Component);

    svgString = svgString.replace(/currentColor/g, color);
    svgString = svgString.replace(/\s(width|height)="[\d.]+"/g, "");

    svgString = svgString.replace(
        /<svg([^>]*)>/,
        `<svg$1 width="${width}" height="${height}">`
    );
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const downloadPNG = ({ Component, color, name, width, height }: Download) => {
    let svgString = ReactDOMServer.renderToStaticMarkup(Component);

    svgString = svgString.replace(/currentColor/g, color);

    svgString = svgString.replace(/\s(width|height)="[\d.]+"/g, "");

    svgString = svgString.replace(
        /<svg([^>]*)>/,
        `<svg$1 width="${width}" height="${height}">`
    );

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
                if (blob) {
                    const pngUrl = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = pngUrl;
                    a.download = `${name}.png`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(pngUrl);
                }
            }, "image/png");
        }

        URL.revokeObjectURL(url);
    };
    img.src = url;
};
