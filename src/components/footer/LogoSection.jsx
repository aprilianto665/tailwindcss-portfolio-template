export default function LogoSection({ name }) {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold text-white tracking-wider mb-2">
        {name}
      </h1>
      <p className="text-sm text-gray-500 max-w-xs">
        Building efficient and beautiful digital systems through modern web
        technologies.
      </p>
    </div>
  );
}
