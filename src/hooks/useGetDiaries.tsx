import { useEffect, useState } from "react";
import { DiaryItem } from "../types/Diary.type";

const DIARY_DATA: DiaryItem[] = [
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
  {
    date: "2021.05.21 23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  },
];

const useGetDiaries = ({ page = 0, limit = 8, keepPreviousData = true }) => {
  const [data, setData] = useState<DiaryItem[]>([]);
  const index = page * limit;

  useEffect(() => {
    if (keepPreviousData) {
      const newData = [...data, ...DIARY_DATA.slice(index, index + limit)];
      setData(newData);
    } else {
      const newData = DIARY_DATA.slice(index, index + limit);
      setData((prevData) => (newData?.length ? newData : prevData));
    }
  }, [page, limit, keepPreviousData, index]);

  return data;
};

export default useGetDiaries;
