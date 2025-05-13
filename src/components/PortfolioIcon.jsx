export default function PortfolioIcon() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="#f9a8d4"
        strokeWidth="1.5"
      />
      <path d="M3 9H21" stroke="#f9a8d4" strokeWidth="1.5" />
      <path d="M9 21V9" stroke="#f9a8d4" strokeWidth="1.5" />
      <rect
        x="12"
        y="12"
        width="6"
        height="6"
        rx="1"
        fill="#f472b6"
        fillOpacity="0.3"
      />
      <circle cx="6" cy="6" r="1.5" fill="#f472b6" fillOpacity="0.3" />
    </svg>
  );
}