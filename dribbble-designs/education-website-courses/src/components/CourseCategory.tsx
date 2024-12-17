type Props = {
  text: string;
  textColor: string;
  bgColor: string;
};

const CourseCategory = ({ text, textColor, bgColor }: Props) => {
  return (
    <div
      className="border border-black text-sm font-semibold px-3 py-1 rounded-lg"
      style={{ color: textColor, background: bgColor }}
    >
      {text}
    </div>
  );
};

export default CourseCategory;
