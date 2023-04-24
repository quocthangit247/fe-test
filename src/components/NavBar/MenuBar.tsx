import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import MenuBarIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close.svg";

const MENU_ITEMS: { text: string; href: string }[] = [
  {
    text: "自分の記録",
    href: "my-record",
  },
  {
    text: "体重グラフ",
    href: "#",
  },
  {
    text: "目標",
    href: "#",
  },
  {
    text: "選択中のコース",
    href: "#",
  },
  {
    text: "コラム一覧",
    href: "column",
  },
  {
    text: "設定",
    href: "#",
  },
];

const menuItemLength = MENU_ITEMS.length;

const MenuBar = () => {
  return (
    <Menu as="div" className="relative text-left flex items-center">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center rounded-full">
              <span className="sr-only">Open options</span>
              <Image src={open ? CloseIcon : MenuBarIcon} alt="menu-bar" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-12 z-50 mt-2 w-56 origin-top-right bg-primary-gray focus:outline-none">
              {MENU_ITEMS.map(({ text, href }, idx) => (
                <Menu.Item key={text + href}>
                  <Link
                    href={href}
                    className={`block px-8 py-6 text-sm text-white border-b hover:bg-zinc-400 ${
                      idx === menuItemLength - 1 ? "" : "border-b-zinc-400"
                    }`}
                  >
                    {text}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuBar;
