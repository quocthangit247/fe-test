import Image from "next/image";
import React from "react";
import KnifeIcon from "../../assets/icons/knife.svg";
import CupIcon from "../../assets/icons/cup.svg";

interface HexagonButtonProps {
  icon: "knife" | "cup";
  text: string;
  onClick?: () => void;
}

const getIconSrc = (icon: "knife" | "cup") => {
  if (icon === "knife") return KnifeIcon;
  if (icon === "cup") return CupIcon;
};

const HexagonButton = ({ icon, text, onClick }: HexagonButtonProps) => {
  const handleClick = () => {
    console.log(">>>>>>>>>>>>>>>>>>>", "clicked");
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="w-44 h-36 flex flex-col items-center justify-center text-white text-2xl overflow-hidden"
      style={{
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
        // @ts-ignore
        "clip-path":
          "polygon(50% 0%, 82% 25%, 82% 75%, 50% 100%, 18% 75%, 18% 25%)",
      }}
    >
      <Image src={getIconSrc(icon)} alt="Icon button" />
      <span>{text}</span>
    </button>
  );
};

export default HexagonButton;
