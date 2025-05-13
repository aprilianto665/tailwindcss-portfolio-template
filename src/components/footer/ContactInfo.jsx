// SVG Icons as separate components for better organization
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    className="text-gray-400"
    viewBox="0 0 16 16"
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Z" />
    <path d="M14.247 14.269c1.01-.932 1.753-2.215 1.753-3.669 0-.7-.186-1.354-.534-1.958l-8.5 6.364a.5.5 0 0 1-.596 0l-8.5-6.364C-.183 9.246-.368 9.9-.368 10.6c0 1.454.738 2.737 1.748 3.669.346.32.65.49.997.593C3.04 14.988 3.724 15 4.6 15s1.56-.012 2.223-.138c.347-.104.65-.272.997-.593Z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    className="text-gray-400"
    viewBox="0 0 16 16"
  >
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

const TimeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    className="text-gray-400"
    viewBox="0 0 16 16"
  >
    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 8.5A.5.5 0 0 1 .5 8H2a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM13 8a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1h-1.5A.5.5 0 0 1 13 8z" />
  </svg>
);

export default function ContactInfo({ email, address, time }) {
  return (
    <div>
      <h3 className="text-white font-medium mb-3 text-center sm:text-left">
        Contact Info
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <EmailIcon />
          <span className="text-sm">{email}</span>
        </li>
        <li className="flex items-center gap-2">
          <LocationIcon />
          <span className="text-sm">{address}</span>
        </li>
        <li className="flex items-center gap-2">
          <TimeIcon />
          <span className="text-sm">{time}</span>
        </li>
      </ul>
    </div>
  );
}
