import { NewsListDataItem } from "../../types/NewsData.type";
import NewsListItem from "./NewsItem";

interface NewsListProps {
  news: NewsListDataItem[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {news.map(({ image, date, title, tags }, idx) => {
        return (
          <NewsListItem
            key={date + idx}
            image={image}
            text={date}
            title={title}
            tags={tags}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
