import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

type Download = {
    name: string;
    Component: ReactNode;
    color: string;
    width: number;
    height: number;
};

export const downloadSVG = ({ Component, color, name, width, height }: Download) => {
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

export const downloadPNG = ({ Component, color, name, width, height }: Download) => {
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

export const getContrastColor = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance > 128 ? "#000000" : "#FFFFFF";
    };