export default function Skill({ name = "Skill" }) {
  return (
    <div className="p-3 pr-6 border-2 border-yellow-600 shadow-[4px_4px_0px_#4B5563] hover:shadow-[4px_6px_0px_#4B5563] bg-gray-700/50 backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300 rounded-sm relative overflow-hidden group h-20 w-full flex items-center">
      <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      <div className="ml-2 whitespace-normal break-words font-medium group-hover:text-yellow-300 transition-colors duration-300 text-center w-full truncate">
        {name}
      </div>
    </div>
  );
}
