export default function MedalLogo() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="9" r="6" stroke="#4ade80" strokeWidth="1.5" />
      <path
        d="M9 15L7.5 22L12 20L16.5 22L15 15"
        stroke="#4ade80"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="3" fill="#4ade80" fillOpacity="0.3" />
      <path
        d="M10 9L11 10L14 7"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}