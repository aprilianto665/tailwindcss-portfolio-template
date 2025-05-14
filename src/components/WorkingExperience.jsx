import { workExperience } from "../utils/aboutData";
import Job from "./Job";

export default function WorkingExperience() {
  return (
    <section className="w-screen mx-auto py-8 pb-20 bg-gray-800 text-white relative overflow-hidden">
      {/* decoration */}
      <div className="absolute top-10 left-16 opacity-10">
        <div className="w-16 h-16 border-4 border-purple-400 rounded-full"></div>
        <div className="w-8 h-8 bg-purple-500/30 absolute -bottom-2 -right-2"></div>
      </div>

      <div className="absolute bottom-24 right-12 opacity-15">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute"
            style={{
              top: `${i * 10}px`,
              right: `${i * 6}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-1/3 right-1/4 opacity-10">
        <div className="w-24 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 rotate-45"></div>
        <div className="w-24 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 -rotate-45 mt-6"></div>
      </div>

      {/* title */}
      <div className="container 2xl:w-[1280px] mx-auto px-4 lg:px-8 pt-6">
        <div className="relative mb-12">
          <h1 className="text-center sm:text-left text-purple-400 text-5xl sm:text-6xl font-bold relative z-10">
            Working Experience
          </h1>
          <div className="mx-auto sm:mx-0 mt-2 bg-purple-400 w-[100px] h-[2px]"></div>
        </div>

        {/* content */}
        <div className="space-y-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600/30 hidden min-[1280px]:block"></div>
          {workExperience.map((job, i) => (
            <Job key={i} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
