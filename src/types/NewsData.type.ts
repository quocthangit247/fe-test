import { StaticImageData } from "next/image";

export interface NewsListDataItem {
  date: string;
  image: string | StaticImageData;
  title: string;
  tags: string[];
}
