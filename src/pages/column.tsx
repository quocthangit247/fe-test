import { useState } from "react";
import useGetNews from "../hooks/useGetNews";
import Header from "../page-components/column/Header";
import NewsList from "../page-components/column/NewsList";
import Button from "../components/Button/Button";

export default function Column() {
  const [page, setPage] = useState(0);
  const news = useGetNews({ page });

  return (
    <div className="px-40 my-6">
      <div className="grid grid-cols-4 gap-8">
        <Header title="RECOMMENDED COLUMN" subTitle="オススメ" />
        <Header title="RECOMMENDED DIET" subTitle="ダイエット" />
        <Header title="RECOMMENDED BEAUTY" subTitle="美容" />
        <Header title="RECOMMENDED HEALTH" subTitle="健康" />
      </div>
      <div className="w-full mt-14">
        <NewsList news={news} />
      </div>
      <div className="flex justify-center mt-10 mb-14">
        <Button
          text="記録をもっと見る"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </div>
    </div>
  );
}
