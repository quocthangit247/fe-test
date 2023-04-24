import { useEffect, useState } from "react";
import column1 from "../assets/images/column-1.jpg";
import column2 from "../assets/images/column-2.jpg";
import column3 from "../assets/images/column-3.jpg";
import column4 from "../assets/images/column-4.jpg";
import column5 from "../assets/images/column-5.jpg";
import column6 from "../assets/images/column-6.jpg";
import column7 from "../assets/images/column-7.jpg";
import column8 from "../assets/images/column-8.jpg";
import { NewsListDataItem } from "../types/NewsData.type";

const NEWS_DATA: NewsListDataItem[] = [
  {
    date: "2021.05.21 23:23",
    image: column1,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.21 23:23",
    image: column2,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.21 23:23",
    image: column3,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.21 23:23",
    image: column4,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.20 23:23",
    image: column5,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.20 23:23",
    image: column6,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.20 23:23",
    image: column7,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.20 23:23",
    image: column8,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.19 23:23 23:23",
    image: column1,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.19 23:23",
    image: column2,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.19 23:23",
    image: column3,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.19 23:23",
    image: column4,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.18 23:23",
    image: column5,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.18 23:23",
    image: column6,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.18 23:23",
    image: column7,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    date: "2021.05.18 23:23",
    image: column8,
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べるメリ",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
];

const useGetNews = ({ page = 0, limit = 8, keepPreviousData = true }) => {
  const [data, setData] = useState<NewsListDataItem[]>([]);
  const index = page * limit;

  useEffect(() => {
    if (keepPreviousData) {
      const newData = [...data, ...NEWS_DATA.slice(index, index + limit)];
      setData(newData);
    } else {
      const newData = NEWS_DATA.slice(index, index + limit);
      setData((prevData) => (newData?.length ? newData : prevData));
    }
  }, [page, limit, keepPreviousData, index]);

  return data;
};

export default useGetNews;
