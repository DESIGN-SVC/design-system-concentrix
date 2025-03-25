import { Slot } from "@radix-ui/react-slot";
import { list } from "./iconsList";
import { cx } from "cva";
import { ReactNode, useMemo, useState } from "react";
import { ModalDownload } from "./modalDownload";

type ModalIcon = {
    icon?: ReactNode;
    open: boolean;
    name: string;
};

export const Icons = () => {
    const [icons, setIcons] = useState({
        colorDefault: "#003D5B",
        sizeDefault: 40,
    });
    const [searchIcon, setSearchIcon] = useState("");
    const [modalIcon, setModalIcon] = useState<ModalIcon>({
        name: "",
        open: false,
    });

    const getContrastColor = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance > 128 ? "#000000" : "#FFFFFF";
    };
    const listTitleIcon = useMemo(
        () =>
            list.flatMap(({ components }) =>
                components.map(({ name }) => name)
            ),
        []
    );
    const filteredIcon = useMemo(() => {
        if (searchIcon.length < 2) return list;

        return list
            .map(({ title, components }) => ({
                title,
                components: components.filter(({ name, tags }) => {
                    const searchLower = searchIcon.toLowerCase();
                    return (
                        name.toLowerCase().includes(searchLower) ||
                        tags.some((tag) =>
                            (tag as string).toLowerCase().includes(searchLower)
                        )
                    );
                }),
            }))
            .filter(({ components }) => components.length > 0);
    }, [searchIcon]);

    return (
        <div className="space-y-5 relative mb-5">
            <div
                className={cx([
                    "flex flex-col gap-10 =",
                    "px-3 pb-5 w-full max-w-7xl shadow-md mx-auto rounded bg-white",
                    "sticky top-0 z-10",
                    "transition-all ease-in-out duration-300",
                ])}
            >
                <h5 className="text-2xl font-semibold text-center">
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
                            color: getContrastColor(icons.colorDefault),
                        }}
                    >
                        <input
                            type="color"
                            hidden
                            value={icons.colorDefault}
                            onChange={(e) =>
                                setIcons((prev) => {
                                    return {
                                        ...prev,
                                        colorDefault: e.target.value,
                                    };
                                })
                            }
                        />
                        <span>{icons.colorDefault}</span>
                    </label>
                    <input
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
                </div>
            </div>
            <main className="space-y-10 w-full max-w-7xl mx-auto overflow-hidden relative">
                <div className="space-y-3 divide-gray-100 divide-y">
                    {filteredIcon.map(({ components, title }, index) => {
                        return (
                            <div
                                key={title + index}
                                className="flex flex-col items-center space-y-5 "
                            >
                                <h6 className="capitalize font-semibold text-[#007380]">
                                    {title}
                                </h6>
                                <ul className="flex  items-center justify-between flex-wrap w-full">
                                    {components.map(({ item, name }) => (
                                        <li
                                            key={name}
                                            className="w-full max-w-32  "
                                        >
                                            <button
                                                className={cx([
                                                    "flex flex-col items-center justify-center gap-3",
                                                    "w-full aspect-square p-2",
                                                    "rounded-md cursor-pointer",
                                                    "ease-in duration-200",
                                                    "hover:bg-[#E9FCFA]",
                                                ])}
                                                onClick={() => {
                                                    setModalIcon({
                                                        icon: item,
                                                        open: true,
                                                        name,
                                                    });
                                                    setTimeout(() => {
                                                        document
                                                            .getElementById(
                                                                "modal-icon-download"
                                                            )
                                                            ?.scrollIntoView({
                                                                behavior:
                                                                    "smooth",
                                                                block: "center",
                                                                inline: "end",
                                                            });
                                                    }, 100);
                                                }}
                                            >
                                                <Slot
                                                    style={{
                                                        color: icons.colorDefault,
                                                        width: icons.sizeDefault,
                                                        height: icons.sizeDefault,
                                                    }}
                                                    className="transition-all"
                                                >
                                                    {item}
                                                </Slot>
                                                <p className="text-xs font-medium text-center">
                                                    {name}
                                                </p>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <ModalDownload
                    isOpen={modalIcon?.open}
                    name={modalIcon?.name}
                    icon={modalIcon.icon}
                    color={icons.colorDefault}
                    size={icons.sizeDefault}
                />
            </main>
        </div>
    );
};
