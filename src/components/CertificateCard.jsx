import MedalLogo from "./MedalLogo";
import { motion } from "framer-motion";

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, credentialId, description, skills, link, img } =
    certificate;

  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative bg-gray-800 border-4 border-green-600 shadow-[6px_6px_0px_#4B5563] hover:shadow-[6px_7px_0px_#4B5563] p-5 h-full group overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

        {/* Certificate Icon */}
        <div className="relative h-80 overflow-hidden mb-4 bg-gray-900/50 rounded-md flex items-center justify-center p-4 group-hover:bg-gray-900/70 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/5"></div>
          {img !== "" ? (
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ) : (
            <div className="w-32 h-32 transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
              <MedalLogo />
            </div>
          )}
        </div>

        {/* Certificate Content */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-green-300">{title}</h3>
          <span className="text-sm text-gray-400 text-nowrap">{date}</span>
        </div>
        <p className="text-gray-400 text-sm mb-2">Issued by: {issuer}</p>
        <p className="text-gray-400 text-xs mb-4">
          Credential ID: {credentialId}
        </p>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Skills with hover effect matching portfolio tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-green-300 border border-green-500/30"
              whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-300 group"
        >
          View Certificate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
