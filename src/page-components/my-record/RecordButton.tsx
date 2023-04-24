import Image, { StaticImageData } from "next/image";

interface RecordButtonProps {
  image: string | StaticImageData;
  text: string;
  title: string;
}

const RecordButton = ({ image, text, title }: RecordButtonProps) => {
  return (
    <button className="relative border-[24px] border-primary-yellow">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={text}
          fill
          style={{
            objectFit: "cover",
            filter: "grayscale(1)",
          }}
        />
        <div className="absolute w-full h-full bg-black z-10 opacity-50" />
      </div>
      <div className="absolute w-full z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl block text-primary-yellow text-center">
          {title}
        </p>
        <span className="bg-primary-orange py-2 px-8 mt-3 inline-block" >{text}</span>
      </div>
    </button>
  );
};

export default RecordButton;
