import React from "react";

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return <div className="bg-primary-yellow px-4 py-2 text-white">{text}</div>;
};

export default Label;
