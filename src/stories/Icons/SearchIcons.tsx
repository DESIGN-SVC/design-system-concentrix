import { cx } from "cva";
import { getContrastColor } from "./utils";
import { ComponentProps } from "react";

type SearchIconsProps = {
    icons: {
        colorDefault: string;
        sizeDefault: number;
    };
    setIcons: React.Dispatch<
        React.SetStateAction<{
            colorDefault: string;
            sizeDefault: number;
        }>
    >;
    listTitleIcon: string[];
    setSearchIcon: React.Dispatch<React.SetStateAction<string>>;
    searchInputRef: React.RefObject<HTMLInputElement>;
};

export const SearchIcons = ({
    icons,
    setIcons,
    listTitleIcon,
    setSearchIcon,
    searchInputRef,
}: SearchIconsProps) => {
    const handleChangeColors = (color: string) => {
        setIcons((prev) => {
            return {
                ...prev,
                colorDefault: color,
            };
        });
    };

    return (
        <div
            className={cx([
                "flex flex-col gap-10 =",
                "px-3 pb-5 w-full max-w-7xl shadow-md mx-auto rounded bg-white",
                "sticky top-0 z-10",
                "transition-all ease-in-out duration-300",
            ])}
        >
            <h5 className="text-2xl font-semibold text-center text-primary">
                List Icon design System Concentrix
            </h5>
            <div className="flex gap-3 flex-wrap">
                <label
                    className={cx([
                        "border-transparent rounded-sm cursor-pointer",
                        "px-3 py-1 block w-full max-w-24",
                        "text-sm font-medium text-center",
                        "flex items-center justify-center flex-wrap",
                    ])}
                    style={{
                        backgroundColor: icons.colorDefault,
                        color: getContrastColor(icons.colorDefault,'#000000','#ffffff'),
                    }}
                >
                    <input
                        type="color"
                        hidden
                        value={icons.colorDefault}
                        onChange={(e) => handleChangeColors(e.target.value)}
                    />
                    <span>{icons.colorDefault}</span>
                </label>
                <fieldset>
                    <input
                        ref={searchInputRef}
                        type="text"
                        list="titleIcon"
                        onChange={(e) => setSearchIcon(e.target.value)}
                        className={cx([
                            "border rounded-sm",
                            "px-3 py-1",
                            "outline-none appearance-none",
                            "text-sm",
                        ])}
                        placeholder="Search"
                    />
                    <datalist id="titleIcon" className="appearance-none">
                        {listTitleIcon.map((el) => (
                            <option key={el}>{el}</option>
                        ))}
                    </datalist>
                </fieldset>
                <div className="flex gap-2 items-center flex-wrap">
                    <p>{icons.sizeDefault}px</p>
                    <input
                        className="cursor-pointer bg-black"
                        type="range"
                        defaultValue={icons.sizeDefault}
                        max={96}
                        min={16}
                        step={4}
                        onChange={(e) =>
                            setIcons((prev) => {
                                return {
                                    ...prev,
                                    sizeDefault: Number(e.target.value),
                                };
                            })
                        }
                    />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <ButtonSwitchColor
                        className="bg-primary"
                        onSwitchColor={() => handleChangeColors("#003d5b")}
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#007380")}
                        className="bg-secondary"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#ffffff")}
                        className="bg-white"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#25E2CC")}
                        className="bg-st-100"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#CC3262")}
                        className="bg-pink"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#ff8400")}
                        className="bg-orange-100"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#fbca18")}
                        className="bg-yellow-100"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#F2F2F2")}
                        className="bg-gray-10"
                    />
                    <ButtonSwitchColor
                        onSwitchColor={() => handleChangeColors("#2a2b2c")}
                        className="bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
};

type ButtonSwitchColorProps = {
    onSwitchColor: () => void;
} & ComponentProps<"button">;

const ButtonSwitchColor = ({
    onSwitchColor,
    className,
    ...props
}: ButtonSwitchColorProps) => (
    <button
        className={cx([
            "aspect-square w-5",
            "rounded-full shadow-md",
            "cursor-pointer",
            className,
        ])}
        onClick={onSwitchColor}
        {...props}
    />
);
