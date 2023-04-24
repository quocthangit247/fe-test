interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  const handleClick = () => {
    console.log(">>>>>>>>>>>>>>>>>>>", "clicked");
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="h-14 flex flex-col items-center justify-center text-white text-2xl px-24"
      style={{
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
