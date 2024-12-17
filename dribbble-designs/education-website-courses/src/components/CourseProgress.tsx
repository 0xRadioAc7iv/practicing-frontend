import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import CourseCategory from "./CourseCategory";
import { useState } from "react";
import ContinueButton from "./ContinueButton";
import profile from "../assets/profile.png";

type Props = {
  categoryText: string;
  categoryTextColor: string;
  categoryBGColor: string;
  title: string;
  bgColor: string;
  lessonsCompleted: number;
  maxLessons: number;
  enrolledStudents: number;
  bookmarked?: boolean;
};

const CourseProgress = ({
  categoryText,
  categoryTextColor,
  categoryBGColor,
  title,
  bgColor,
  lessonsCompleted,
  maxLessons,
  enrolledStudents,
  bookmarked,
}: Props) => {
  const [isBookmarkActive, setBookmarkActive] = useState(bookmarked);
  const progressBarFill = (lessonsCompleted / maxLessons) * 100;

  const toggleBookmarkStatus = () => {
    setBookmarkActive(!isBookmarkActive);
  };

  return (
    <div
      className="flex flex-col justify-between gap-5 w-full rounded-3xl p-3 border border-black font-kodchasan"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <div className="flex justify-between">
          <CourseCategory
            text={categoryText}
            textColor={categoryTextColor}
            bgColor={categoryBGColor}
          />
          <div onClick={toggleBookmarkStatus}>
            {isBookmarkActive ? (
              <GoBookmarkFill size={30} />
            ) : (
              <GoBookmark size={30} />
            )}
          </div>
        </div>
        <div className="text-2xl font-bold mt-2">{title}</div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="text-sm font-bold text-gray-700">Progress</div>
            <div className="text-sm font-bold text-gray-700">
              {lessonsCompleted}/{maxLessons} lessons
            </div>
          </div>
          <div>
            <div className="w-full bg-black bg-opacity-20 rounded-full h-2.5 mt-2">
              <div
                className="bg-black h-2.5 rounded-full"
                style={{ width: `${progressBarFill}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex items-center relative">
            <img
              src={profile}
              className="rounded-full border border-black"
              width={40}
            />
            <img
              src={profile}
              className="absolute left-[24px] rounded-full border border-black"
              width={40}
            />
            <img
              src={profile}
              className="absolute left-[48px] rounded-full border border-black"
              width={40}
            />
            <img
              src={profile}
              className="absolute left-[72px] rounded-full border border-black"
              width={40}
            />
            <div
              className="flex justify-center items-center absolute left-[96px] w-10 h-10 border text-center border-black text-sm font-bold rounded-full"
              style={{ color: categoryTextColor, background: categoryBGColor }}
            >
              +{enrolledStudents}
            </div>
          </div>
          <ContinueButton />
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
