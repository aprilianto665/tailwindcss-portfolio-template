import Skill from "./Skill";
import { skills } from "../utils/aboutData";

export default function Skills() {
  const { frontend, backend, others, img } = skills;

  // Helper function to render skills by category
  const renderSkillsByCategory = (categorySkills, categoryName) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3 text-yellow-300">
        {categoryName}
      </h3>
      <div className="grid grid-cols-2 min-[1280px]:grid-cols-3 gap-4">
        {categorySkills.map((skill, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Skill name={skill} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-screen mx-auto py-4 bg-gray-800 text-gray-200 pb-16 relative overflow-hidden">
      {/* Decorative elements - matching About Me style */}
      {/* Minimal decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-16 h-1 bg-yellow-400"></div>
        <div className="w-1 h-16 bg-yellow-400 ml-8 -mt-8"></div>
      </div>

      <div className="absolute bottom-20 left-10 opacity-10">
        <div className="w-12 h-12 border border-yellow-400"></div>
      </div>

      <div className="container 2xl:w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-start lg:justify-between pt-6">
        {/* Image section - minimalist design */}
        <div className="hidden lg:block lg:w-2/5 relative">
          <div className="relative overflow-hidden z-10 border-l-2 border-t-2 border-yellow-400 p-4">
            {img ? (
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="Skills"
                  className="w-full h-auto object-cover shadow-md transform transition-all duration-500 hover:scale-110"
                />
              </div>
            ) : (
              <div className="w-full h-[350px] bg-gray-900 flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-light text-yellow-400/50 hover:scale-110 transition-transform duration-500">
                  IMG
                </span>
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-yellow-400"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1/2 bg-yellow-400"></div>
          </div>
        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2">
          <div className="relative mb-12">
            <h1 className="text-center sm:text-left text-yellow-400 text-5xl sm:text-6xl font-bold relative z-10">
              Skills
            </h1>
            <div className="mx-auto sm:mx-0 mt-2 bg-yellow-400 w-[60px] h-[2px]"></div>
          </div>

          <div className="max-w-full">
            {/* Frontend Skills */}
            {renderSkillsByCategory(frontend, "Frontend")}

            {/* Backend Skills */}
            {renderSkillsByCategory(backend, "Backend")}

            {/* Other Skills */}
            {renderSkillsByCategory(others, "Others")}
          </div>
        </div>
      </div>
    </section>
  );
}
