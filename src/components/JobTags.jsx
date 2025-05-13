export default function JobTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
