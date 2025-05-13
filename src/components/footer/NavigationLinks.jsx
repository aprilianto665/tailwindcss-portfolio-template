import { Link } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <div>
      <h3 className="text-white font-medium mb-3 text-center sm:text-left">
        Navigation
      </h3>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            to={"/"}
            className="hover:text-cyan-400 transition-colors duration-300 text-sm"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to={"/portfolio"}
            className="hover:text-cyan-400 transition-colors duration-300 text-sm"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to={"/certificates"}
            className="hover:text-cyan-400 transition-colors duration-300 text-sm"
          >
            Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}
