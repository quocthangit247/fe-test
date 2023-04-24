import { StaticImageData } from "next/image";

export interface MealListDataItem {
  date: string;
  image: string | StaticImageData;
  type: "Morning" | "Lunch" | "Dinner" | "Snack";
}
