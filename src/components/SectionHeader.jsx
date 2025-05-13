export default function SectionHeader({
  title,
  description,
  color = "pink",
  underlineWidth = "w-[190px]",
}) {
  // Define color variants based on the color prop
  const colorVariants = {
    pink: {
      title: "text-pink-300",
      underline: "bg-pink-600",
    },
    green: {
      title: "text-green-300",
      underline: "bg-green-600",
    },
  };

  // Get the selected color variant or default to pink
  const selectedColor = colorVariants[color] || colorVariants.pink;

  return (
    <div className="px-4 sm:px-16 py-8 text-white relative container 2xl:w-[1280px] mx-auto">
      <h1
        className={`text-center sm:text-left ${selectedColor.title} w-full text-5xl font-bold`}
      >
        {title}
      </h1>
      <div
        className={`mx-auto sm:mx-0 mb-5 mt-1 ${selectedColor.underline} ${underlineWidth} h-3`}
      ></div>
      <p className="text-xl text-gray-300 max-w-2xl mb-4">{description}</p>
    </div>
  );
}
