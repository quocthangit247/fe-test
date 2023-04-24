import Image from "next/image";
import Challenge from "../../assets/icons/challenge.svg";
import Info from "../../assets/icons/info.svg";
import Logo from "../../assets/icons/logo.svg";
import Memo from "../../assets/icons/memo.svg";
import NavItem, { NavItemProps } from "./NavItem";
import MenuBar from "./MenuBar";
import Link from "next/link";

const NAV_ITEMS: NavItemProps[] = [
  {
    iconSrc: Memo,
    text: "自分の記録",
    href: "/my-record",
  },
  {
    iconSrc: Challenge,
    text: "チャレンジ",
  },
  {
    iconSrc: Info,
    text: "お知らせ",
    count: 1,
  },
];

const NavBar = () => {
  return (
    <div className="bg-primary-dark flex flex-col md:flex-row px-40 py-4 justify-between">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" />
      </Link>
      <div className="flex">
        {NAV_ITEMS.map(({ iconSrc, text, count, href }) => (
          <NavItem
            key={text}
            href={href}
            iconSrc={iconSrc}
            text={text}
            count={count}
          />
        ))}
        <MenuBar />
      </div>
    </div>
  );
};

export default NavBar;
