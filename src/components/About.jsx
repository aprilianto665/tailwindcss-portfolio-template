import { about } from "../utils/aboutData";

export default function About() {
  const { name, caption, img } = about;
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

      <div className="px-4 sm:px-16 py-8 text-white relative container 2xl:w-[1280px] mx-auto transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-center sm:text-left text-cyan-300 w-full text-5xl font-bold">
          About Me
        </h1>
        <div className="mx-auto sm:mx-0 mb-5 mt-1 bg-cyan-600 w-[220px] h-3"></div>
        <div className="p-8 border-4 border-cyan-600 shadow-[10px_10px_0px_#4B5563] flex flex-col min-[768px]:flex-row items-center justify-between backdrop-blur-sm bg-gray-800/90 hover:bg-gray-800/95 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          <div className="mb-6 sm:mr-8">
            <h1 className="text-3xl font-bold text-center sm:text-left mb-2 text-cyan-300">
              Hello, I'm {name}!
            </h1>
            <p className="text-lg text-justify leading-relaxed">{caption}</p>
          </div>
          <div className="mx-auto min-[768px]:mx-0 w-60 h-60 rounded-full overflow-hidden border-2 border-cyan-600 shadow-lg flex-shrink-0 self-center">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover bg-gray-200 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
