import JobTags from "./JobTags";

export default function Job({ year, company, position, description, tags }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-4 md:mb-0 md:pr-8 flex md:justify-end">
        <div className="md:text-right">
          <div className="inline-block md:block relative">
            <span className="text-purple-400 font-bold text-lg">{year}</span>
          </div>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
      <div className="md:w-3/4 p-6 border-4 border-purple-500/50 bg-gray-800/80 hover:bg-gray-800/95 transform transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#4B5563] hover:shadow-[6px_9px_0px_#4B5563] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-purple-400/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        <h3 className="text-xl font-bold text-purple-300 mb-2">{position}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <JobTags tags={tags} />
      </div>
    </div>
  );
}
