import { useEffect, useState } from "react";
import { ExerciseItem } from "../types/Exercise.type";

const EXERCISE_DATA: ExerciseItem[] = [
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
  {
    name: "家事全般（立位・軽い)",
    consumption: 26,
    consumptionUnit: "kcal",
    duration: 10,
    durationUnit: "min",
  },
];

const useGetExercises = ({ page = 0, limit = 8, keepPreviousData = true }) => {
  const [data, setData] = useState<ExerciseItem[]>([]);
  const index = page * limit;

  useEffect(() => {
    if (keepPreviousData) {
      const newData = [...data, ...EXERCISE_DATA.slice(index, index + limit)];
      setData(newData);
    } else {
      const newData = EXERCISE_DATA.slice(index, index + limit);
      setData((prevData) => (newData?.length ? newData : prevData));
    }
  }, [page, limit, keepPreviousData, index]);

  return data;
};

export default useGetExercises;
