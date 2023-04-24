import { ExerciseItem } from "../../types/Exercise.type";

interface ExerciseInformationProps {
  title: string;
  data: ExerciseItem[];
}

const Item = ({ item }: { item: ExerciseItem }) => (
  <div className="border-b">
    <div className="flex justify-between">
      <div>
        <span>&bull;</span> {item.name}
      </div>
      <div className="text-primary-yellow">{`${item.duration} ${item.durationUnit}`}</div>
    </div>
    <div className="text-primary-yellow pl-2">{`${item.consumption} ${item.consumptionUnit}`}</div>
  </div>
);

const ExerciseInformation = ({ title, data }: ExerciseInformationProps) => {
  return (
    <div className="h-72 bg-primary-dark text-white p-6 overflow-hidden">
      <h5 className="text-2xl pb-2">{title}</h5>
      <div className="h-64 overflow-auto">
        {data.map((item, idx) => {
          const nextItem = data[idx + 1];
          return (
            <div key={item.name} className="grid grid-cols-2 gap-10">
              <Item item={item} />
              {nextItem && <Item item={nextItem} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseInformation;
