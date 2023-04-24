import Image from "next/image";
import React from "react";
import Image_1 from "../../assets/images/d01.jpg";
import ProgressRing from "../../components/ProgressRing/ProgressRing";

const ImageWithPercentage = () => {
  return (
    <div className="h-80 relative">
      <Image
        src={Image_1}
        alt="Image with percentage"
        fill
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute w-full h-full flex justify-center items-center">
        <ProgressRing radius={100} stroke={3} progress={75} />
        <p className="absolute text-white">
          <span>05/21</span>
          <span className="text-xl drop-shadow-md"> 75%</span>
        </p>
      </div>
    </div>
  );
};

export default ImageWithPercentage;
