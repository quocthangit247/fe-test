import { MealListDataItem } from "../../types/MealData.type";
import MealListItem from "./MealListItem";

interface MealListProps {
  meals: MealListDataItem[];
}

const MealList = ({ meals }: MealListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {meals.map(({ image, type, date }) => {
        const text = `${date}.${type}`;
        return <MealListItem image={image} text={text} key={text + image} />;
      })}
    </div>
  );
};

export default MealList;
