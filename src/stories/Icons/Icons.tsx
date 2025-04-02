import { Slot } from "@radix-ui/react-slot";
import { list } from "./iconsList";
import { cx } from "cva";
import { ReactNode, useMemo, useRef, useState } from "react";
import { ModalDownload } from "./modalDownload";
import { SearchIcons } from "./SearchIcons";
import { getContrastColor } from "./utils";

type ModalIcon = {
    icon?: ReactNode;
    open: boolean;
    name: string;
    tags: string[];
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
        tags: [],
    });
    const searchInputRef = useRef<HTMLInputElement>(null);

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
                            tag.toString().toLowerCase().includes(searchLower)
                        )
                    );
                }),
            }))
            .filter(({ components }) => components.length > 0);
    }, [searchIcon]);

    const handleClickIcon = ({ name, tags, icon }: Omit<ModalIcon, "open">) => {
        setModalIcon({
            icon,
            open: true,
            name,
            tags,
        });
        setTimeout(() => {
            document.getElementById("modal-icon-download")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "end",
            });
        }, 100);
    };

    const handleSearchTag = (tag: string) => {
        if (searchInputRef.current) {
            searchInputRef.current.value = tag;
            setSearchIcon(tag);
            setTimeout(() => {
                document.getElementById("content-icons")?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 100);
        }
    };
    console.log(getContrastColor(icons.colorDefault, "#000000", "#ffffff"));
    return (
        <div className="space-y-5 relative mb-5" id="content-icons">
            <SearchIcons
                icons={icons}
                listTitleIcon={listTitleIcon}
                searchInputRef={searchInputRef}
                setIcons={setIcons}
                setSearchIcon={setSearchIcon}
            />
            <main className="space-y-10 w-full max-w-7xl mx-auto overflow-hidden relative">
                <div className="space-y-3 divide-gray-100 divide-y">
                    {filteredIcon.map(({ components, title }, index) => {
                        return (
                            <div
                                key={title + index}
                                className="flex flex-col items-center space-y-5 pb-1"
                            >
                                <h6 className="capitalize font-semibold text-secondary">
                                    {title}
                                </h6>
                                <ul className="flex  items-center justify-between flex-wrap w-full gap-y-1 lg:gap-x-1 lg:justify-center">
                                    {components.map(({ item, name, tags }) => (
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
                                                    {
                                                        "bg-white hover:bg-st-10":
                                                            getContrastColor(
                                                                icons.colorDefault,
                                                                "#000000",
                                                                "#ffffff"
                                                            ) === "#ffffff",
                                                        "hover:bg-secondary bg-primary":
                                                            getContrastColor(
                                                                icons.colorDefault,
                                                                "#000000",
                                                                "#ffffff"
                                                            ) === "#000000",
                                                    },
                                                ])}
                                                onClick={() =>
                                                    handleClickIcon({
                                                        name,
                                                        tags,
                                                        icon: item,
                                                    })
                                                }
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
                                                <p
                                                    className={cx([
                                                        "text-xs font-medium text-center",
                                                        {
                                                            "text-black ":
                                                                getContrastColor(
                                                                    icons.colorDefault,
                                                                    "#000000",
                                                                    "#ffffff"
                                                                ) === "#ffffff",
                                                            " text-white":
                                                                getContrastColor(
                                                                    icons.colorDefault,
                                                                    "#000000",
                                                                    "#ffffff"
                                                                ) === "#000000",
                                                        },
                                                    ])}
                                                >
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
                    onTag={({ tag }) => handleSearchTag(tag)}
                    isOpen={modalIcon?.open}
                    icon={modalIcon.icon}
                    color={icons.colorDefault}
                    size={icons.sizeDefault}
                    {...modalIcon}
                />
            </main>
        </div>
    );
};
