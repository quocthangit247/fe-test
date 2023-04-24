import Link from "next/link";
import React from "react";

const FOOTER_ITEMS: { text: string; href: string }[] = [
  { text: "会員登録", href: "" },
  { text: "運営会社", href: "" },
  { text: "利用規約", href: "" },
  { text: "個人情報の取扱について", href: "" },
  { text: "特定商取引法に基づく表記", href: "" },
  { text: "お問い合わせ", href: "" },
];

function Footer() {
  return (
    <div className="absolute bottom-0 bg-primary-dark h-36 w-full px-40 flex">
      {FOOTER_ITEMS.map(({ text, href }, idx) => (
        <Link
          href={href}
          key={text + href}
          
        >
          <h6 className={`${idx === 0 ? "" : "ml-11"} py-14 text-white`}>{text}</h6>
        </Link>
      ))}
    </div>
  );
}

export default Footer;
