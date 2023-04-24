import Image, { StaticImageData } from "next/image";
import React from "react";
import Label from "../../components/Label/Label";

interface NewsItemProps {
  image: string | StaticImageData;
  text: string;
  title: string;
  tags: string[];
}

const NewsItem = ({ image, text, title, tags }: NewsItemProps) => {
  return (
    <div>
      <button className="relative h-56 w-full">
        <Image src={image} alt={text} fill style={{ objectFit: "cover" }} />
        <div className="absolute bottom-0">
          <Label text={text} />
        </div>
      </button>
      <span className="line-clamp-2 mt-4">{title}</span>
      {tags.map((tag) => (
        <span className="text-primary-orange text-sm pr-3" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default React.memo(NewsItem);
