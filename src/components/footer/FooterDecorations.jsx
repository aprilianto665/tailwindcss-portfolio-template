export default function FooterDecorations() {
  return (
    <>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>

      {/* Circle decoration */}
      <div className="absolute bottom-6 right-10 opacity-10">
        <div className="w-16 h-16 border border-gray-500 rounded-full"></div>
        <div className="w-8 h-8 border border-gray-500 rounded-full absolute -top-4 -left-2"></div>
      </div>

      {/* Square decoration */}
      <div className="absolute top-8 left-16 opacity-5">
        <div className="w-12 h-12 border border-gray-500 rotate-45"></div>
      </div>
    </>
  );
}
