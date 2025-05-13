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
    <section className="w-screen mx-auto py-8 pb-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 right-16 opacity-10">
        <div className="w-20 h-20 border-4 border-yellow-400 rotate-45"></div>
      </div>

      <div className="absolute bottom-20 left-10 opacity-15">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-yellow-500/30 border-r-[15px] border-r-transparent"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-yellow-600/20 border-r-[10px] border-r-transparent absolute -top-8 left-12"></div>
      </div>

      <div className="absolute top-1/2 right-1/4 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-yellow-400 rounded-full absolute"
            style={{
              left: `${i * 10}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="container 2xl:w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-start lg:justify-evenly pt-6">
        {/* Image section */}
        <div className="p-4 border-4 border-yellow-600 shadow-[8px_8px_0px_#4B5563] origin-bottom -rotate-12 hidden lg:block lg:mr-8 hover:rotate-0 transition-all duration-500 hover:shadow-[0px_8px_15px_rgba(0,0,0,0.3)]">
          <div className="bg-gradient-to-br from-gray-500 to-gray-700 border-4 border-yellow-600 w-[300px] h-[300px] text-gray-800 flex items-center justify-center text-4xl font-bold relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/20 to-transparent"></div>
            {img ? (
              <img
                src={img}
                alt="Skills"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            ) : (
              <span className="relative z-10">IMG</span>
            )}
          </div>
          <div className="h-10"></div>
        </div>

        {/* Skills section */}
        <div className="w-full lg:w-auto">
          <h1 className="text-center sm:text-left text-4xl font-bold mb-2 text-yellow-400">
            Skills
          </h1>
          <div className="mx-auto sm:mx-0 bg-yellow-600 w-[100px] h-3 mb-6"></div>

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
