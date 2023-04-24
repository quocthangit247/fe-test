import { useEffect, useState } from "react";
import D01 from "../assets/images/d01.jpg";
import D02 from "../assets/images/d02.jpg";
import L01 from "../assets/images/l01.jpg";
import L02 from "../assets/images/l02.jpg";
import L03 from "../assets/images/l03.jpg";
import M01 from "../assets/images/m01.jpg";
import S01 from "../assets/images/s01.jpg";
import { MealListDataItem } from "../types/MealData.type";

const MEALS_DATA: MealListDataItem[] = [
  {
    date: "05.21",
    image: M01,
    type: "Morning",
  },
  {
    date: "05.21",
    image: L03,
    type: "Lunch",
  },
  {
    date: "05.21",
    image: D01,
    type: "Dinner",
  },
  {
    date: "05.21",
    image: L01,
    type: "Snack",
  },
  {
    date: "05.20",
    image: M01,
    type: "Morning",
  },
  {
    date: "05.20",
    image: L02,
    type: "Lunch",
  },
  {
    date: "05.20",
    image: D02,
    type: "Dinner",
  },
  {
    date: "05.20",
    image: S01,
    type: "Snack",
  },
  {
    date: "05.19",
    image: M01,
    type: "Morning",
  },
  {
    date: "05.19",
    image: L03,
    type: "Lunch",
  },
  {
    date: "05.19",
    image: D01,
    type: "Dinner",
  },
  {
    date: "05.19",
    image: L01,
    type: "Snack",
  },
  {
    date: "05.18",
    image: M01,
    type: "Morning",
  },
  {
    date: "05.18",
    image: L02,
    type: "Lunch",
  },
  {
    date: "05.18",
    image: D02,
    type: "Dinner",
  },
  {
    date: "05.18",
    image: S01,
    type: "Snack",
  },
];

const useGetMeals = ({ page = 0, limit = 8, keepPreviousData = true }) => {
  const [data, setData] = useState<MealListDataItem[]>([]);
  const index = page * limit;

  useEffect(() => {
    if (keepPreviousData) {
      const newData = [...data, ...MEALS_DATA.slice(index, index + limit)];
      setData(newData);
    } else {
      const newData = MEALS_DATA.slice(index, index + limit);
      setData((prevData) => (newData?.length ? newData : prevData));
    }
  }, [page, limit, keepPreviousData, index]);

  return data;
};

export default useGetMeals;
