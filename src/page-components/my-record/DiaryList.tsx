import React from "react";
import { DiaryItem } from "../../types/Diary.type";

interface DiaryListProps {
  data: DiaryItem[];
}

const Item = ({ item }: { item: DiaryItem }) => (
  <div className="border-2 border-light-gray p-4">
    <h5 className="text-xl">{item.date}</h5>
    <p className="line-clamp-5">{item.description}</p>
  </div>
);

const DiaryList = ({ data }: DiaryListProps) => {
  return (
    <div>
      <h2 className="text-2xl mb-2">MY DIARY</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <Item key={item.date + idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
