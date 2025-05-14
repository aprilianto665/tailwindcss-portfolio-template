import { about } from "../utils/aboutData";

export default function About() {
  const { name, caption, img, tags } = about;
  return (
    <section className="w-screen mx-auto py-4 bg-gray-800 text-gray-200 pb-16 relative overflow-hidden">
      <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-16 left-8 opacity-10">
        <div className="w-24 h-24 border-4 border-cyan-300 rounded-full"></div>
        <div className="w-12 h-12 border-2 border-cyan-400 rounded-full absolute -bottom-4 -right-2"></div>
      </div>

      <div className="absolute bottom-12 right-12 opacity-10 rotate-12">
        <div className="w-16 h-16 border-4 border-cyan-300"></div>
        <div className="w-8 h-8 bg-cyan-400/30 absolute -top-4 -left-4"></div>
      </div>

      <div className="absolute top-1/3 left-1/4 opacity-15">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-cyan-300 rounded-full absolute"
            style={{
              top: `${i * 12}px`,
              left: `${i * 8}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-24 left-8 w-32 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 rotate-45 opacity-30"></div>

      <div className="container 2xl:w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12 pt-6">
        {/* Content section with enhanced typography */}
        <div className="w-full lg:w-1/2 lg:pr-16">
          <div className="relative mb-12">
            <span className="absolute -top-10 left-0 text-9xl font-bold text-cyan-600/10">
              About
            </span>
            <h1 className="text-center sm:text-left text-cyan-300 text-5xl sm:text-6xl font-bold relative z-10">
              About Me
            </h1>
            <div className="mx-auto sm:mx-0 mt-2 bg-cyan-600 w-[100px] h-1"></div>
          </div>

          <div className="relative group">
            <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 leading-tight">
              Hello, I'm {name}!
            </span>

            <div className="mt-6 relative">
              <span className="absolute -left-6 top-0 text-4xl text-cyan-500/30">
                "
              </span>
              <p className="text-lg text-gray-300 leading-relaxed pl-2 border-l-2 border-cyan-500/30">
                {caption}
              </p>
              <span className="absolute -bottom-4 right-0 text-4xl text-cyan-500/30">
                "
              </span>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {tags.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm font-medium bg-cyan-900/30 
                              text-cyan-300  border border-cyan-700/30
                              hover:bg-cyan-800/30 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Mobile image - only visible on small screens */}
            <div className="mt-12 lg:hidden relative w-4/5 mx-auto">
              <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-cyan-500/30"></div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-b-4 border-r-4 border-cyan-500/30"></div>

              <div className="relative overflow-hidden group">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-auto object-cover shadow-xl transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent mix-blend-overlay group-hover:from-cyan-900/30 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section - now on the right with creative framing */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-full h-full border-t-4 border-l-4 border-cyan-500/30"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-b-4 border-r-4 border-cyan-500/30"></div>

          <div className="relative overflow-hidden group">
            <img
              src={img}
              alt={name}
              className="w-full h-auto object-cover shadow-xl transform transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent mix-blend-overlay group-hover:from-cyan-900/30 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
