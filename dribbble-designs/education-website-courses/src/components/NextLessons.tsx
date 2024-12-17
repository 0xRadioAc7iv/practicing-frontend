import profile from "../assets/profile.png";

const NextLessons = () => {
  const lessons = [
    {
      title: "01. Introduction to Creative Writing",
      description: "Creative writing for beginners",
      teacher: "ConnerGarcia",
      duration: "22 min",
    },
    {
      title: "03. Foundations of Public Speaking",
      description: "Public Speaking and Leadership",
      teacher: "Saira Goodman",
      duration: "40 min",
    },
    {
      title: "05. Getting to know the tool Adobe Illustrator",
      description: "Digital Illustration with Adobe Illustrator",
      teacher: "Tony Ware",
      duration: "1h 08 min",
    },
    {
      title: "11. Understanding audience puchology",
      description: "Public Speaking: Basic course",
      teacher: "Mya Guzman",
      duration: "26 min",
    },
    {
      title: "04. The importance of self reflection",
      description: "Psychology of Influence",
      teacher: "Zohaib Osborn",
      duration: "23 min",
    },
  ];

  return (
    <div className="flex flex-col gap-2 font-kodchasan items-center px-5 py-4 bg-[#f7f7f5] border border-black rounded-xl">
      <div className="flex w-full justify-between">
        <div className="text-xl font-bold">My next lessons</div>
        <div className="text-[#ff5734] font-semibold">View all lessons</div>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-3 text-left text-sm text-gray-500 font-medium">
                Lesson
              </th>
              <th className="py-3 text-left text-sm text-gray-500 font-medium">
                Teacher
              </th>
              <th className="py-3 text-right text-sm text-gray-500 font-medium">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr className="border-b border-gray-200 last:border-b-0">
                <td className="py-3 pr-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{lesson.title}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {lesson.description}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <img src={profile} />
                    </div>
                    <span className="text-sm font-medium">
                      {lesson.teacher}
                    </span>
                  </div>
                </td>
                <td className="py-4 pl-4 text-right font-bold">
                  {lesson.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NextLessons;
