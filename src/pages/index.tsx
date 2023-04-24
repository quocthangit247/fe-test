import { useState } from "react";
import Button from "../components/Button/Button";
import HexagonButton from "../components/Button/HexagonButton";
import useGetMeals from "../hooks/useGetMeals";
import {
  ImageWithPercentage,
  LineChart,
  MealList,
} from "../page-components/top-page";

export default function Home() {
  const [page, setPage] = useState(0);
  const meals = useGetMeals({ page, keepPreviousData: false });

  return (
    <>
      <div className="grid grid-cols-5 h-80">
        <div className="col-span-2 h-full">
          <ImageWithPercentage />
        </div>
        <div className="col-span-3 h-80 relative">
          <LineChart
            labels={[
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
            ]}
            bodyWeightData={[70, 75, 80, 65, 55, 45, 56, 40, 33, 44, 55, 66]}
            bodyFatData={[70, 73, 68, 63, 55, 45, 56, 44, 36, 47, 50, 52]}
          />
        </div>
      </div>
      <div className="px-40 my-6">
        <div className="flex flex-row mb-6 justify-center">
          <HexagonButton icon="knife" text="Morning" />
          <HexagonButton icon="knife" text="Lunch" />
          <HexagonButton icon="knife" text="Dinner" />
          <HexagonButton icon="cup" text="Snack" />
        </div>
        <MealList meals={meals} />
        <div className="flex justify-center mt-10 mb-14">
          <Button
            text="記録をもっと見る"
            onClick={() => {
              setPage(page + 1);
            }}
          />
        </div>
      </div>
    </>
  );
}
