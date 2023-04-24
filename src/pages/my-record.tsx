import { useState } from "react";
import MyRecommend1 from "../assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "../assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "../assets/images/MyRecommend-3.jpg";
import Button from "../components/Button/Button";
import useGetExercises from "../hooks/useGetExercises";
import {
  DiaryList,
  ExerciseInformation,
  LineChart,
  RecordButton,
} from "../page-components/my-record";
import useGetDiaries from "../hooks/useGetDiaries";

const MyRecord = () => {
  const [page, setPage] = useState(0);
  const exerciseData = useGetExercises({ limit: 100 });
  const diaryData = useGetDiaries({ page });

  return (
    <div className="px-40 mb-14 mt-14">
      <div className="grid grid-cols-3 gap-8">
        <RecordButton
          image={MyRecommend1}
          title="BODY RECORD"
          text="自分のカラダの記録"
        />
        <RecordButton
          image={MyRecommend2}
          title="MY EXERCISE"
          text="自分の運動の記録"
        />
        <RecordButton image={MyRecommend3} title="MY DIARY" text="自分の日記" />
      </div>
      <div className="mt-20">
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
          lineChartTitle="BODY RECORD 2021.05.21"
        />
      </div>
      <div className="mt-16">
        <ExerciseInformation
          title="MY EXERCISE 2021.05.21"
          data={exerciseData}
        />
      </div>
      <div className="mt-16">
        <DiaryList data={diaryData} />
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
};

export default MyRecord;
