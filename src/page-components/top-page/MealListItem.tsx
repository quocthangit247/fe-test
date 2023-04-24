import Image, { StaticImageData } from "next/image";
import React from "react";
import Label from "../../components/Label/Label";

interface MealListItemProps {
  image: string | StaticImageData;
  text: string;
}

const MealListItem = ({ image, text }: MealListItemProps) => {
  return (
    <button className="relative h-56 w-56">
      <Image src={image} alt={text} fill style={{ objectFit: "cover" }} />
      <div className="absolute bottom-0">
        <Label text={text} />
      </div>
    </button>
  );
};

export default React.memo(MealListItem);
