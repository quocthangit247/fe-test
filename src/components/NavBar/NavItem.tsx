import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavItemProps {
  iconSrc: string;
  text: string;
  count?: number;
  href?: string;
}

function NavItem({ iconSrc, text, count, href }: NavItemProps) {
  const route = useRouter();
  const path = route.pathname;

  return (
    <Link
      href={href || ""}
      className="flex flex-row cursor-pointer items-center pr-8"
    >
      <div className="relative inline-block">
        <Image src={iconSrc} alt={text} />
        {!!count && (
          <span className="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-primary-orange flex justify-center items-center items">
            <span className="text-xs text-white">1</span>
          </span>
        )}
      </div>
      <span
        className={`pl-3 ${
          path === href ? "text-primary-orange" : "text-white"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default NavItem;
