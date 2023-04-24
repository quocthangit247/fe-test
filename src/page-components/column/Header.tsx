import React from "react";

interface HeaderProps {
  title: string;
  subTitle: string;
}

function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className="max-h-52 bg-dark-light">
      <div className="text-2xl text-primary-yellow text-center pt-6 pb-3">
        {title}
      </div>
      <div className="w-14 h-0.5 bg-white mx-auto" />
      <div className="text-white text-lg text-center pt-2 pb-6">{subTitle}</div>
    </div>
  );
}

export default Header;
