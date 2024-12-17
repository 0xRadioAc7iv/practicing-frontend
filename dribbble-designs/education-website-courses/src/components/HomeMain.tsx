import CourseAd from "./CourseAd";
import CourseCategoryButton from "./CourseCategoryButton";
import CourseProgress from "./CourseProgress";
import NextLessons from "./NextLessons";

const HomeMain = () => {
  return (
    <div className="flex flex-col gap-4 px-7 pt-6 pb-6">
      <div className="flex justify-between font-kodchasan">
        <div className="text-2xl font-bold">My Courses</div>
        <div className="flex items-center gap-2">
          <CourseCategoryButton text="All courses" active={true} />
          <CourseCategoryButton text="Marketing" />
          <CourseCategoryButton text="Computer Science" />
          <CourseCategoryButton text="Psychology" />
        </div>
      </div>
      <div className="flex gap-4">
        <CourseProgress
          categoryText="Marketing"
          categoryTextColor="#ffffff"
          categoryBGColor="#151313"
          title="Creative Writing for Beginners"
          bgColor="#fccc42"
          lessonsCompleted={5}
          maxLessons={20}
          enrolledStudents={120}
          bookmarked={true}
        />
        <CourseProgress
          title="Digital Illustration with Adobe Illustrator"
          categoryText="Computer Science"
          categoryTextColor="#151313"
          categoryBGColor="#fccc42"
          bgColor="#BE94F5"
          lessonsCompleted={12}
          enrolledStudents={80}
          maxLessons={40}
        />
        <CourseProgress
          title="Public Speaking and Leadership"
          categoryText="Psychology"
          categoryTextColor="#151313"
          categoryBGColor="#be94f5"
          bgColor="#bee6ff"
          lessonsCompleted={18}
          enrolledStudents={24}
          maxLessons={22}
        />
      </div>
      <div className="flex gap-5">
        <div className="flex-[2]">
          <NextLessons />
        </div>
        <div className="flex-[1]">
          <CourseAd />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
