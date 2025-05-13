export function PinkDecorativeElements() {
  return (
    <>
      {/* Grid dots decoration */}
      <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-pink-400 rounded-full"></div>
        ))}
      </div>

      {/* Circle decoration */}
      <div className="absolute top-16 left-8 opacity-10">
        <div className="w-24 h-24 border-4 border-pink-300 rounded-full"></div>
        <div className="w-12 h-12 border-2 border-pink-400 rounded-full absolute -bottom-4 -right-2"></div>
      </div>

      {/* Square decoration */}
      <div className="absolute bottom-12 right-12 opacity-10 rotate-12">
        <div className="w-16 h-16 border-4 border-pink-300"></div>
        <div className="w-8 h-8 bg-pink-400/30 absolute -top-4 -left-4"></div>
      </div>

      {/* Dots trail decoration */}
      <div className="absolute top-1/3 left-1/4 opacity-15">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-pink-300 rounded-full absolute"
            style={{
              top: `${i * 12}px`,
              left: `${i * 8}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Line decoration */}
      <div className="absolute bottom-24 left-8 w-32 h-px bg-gradient-to-r from-pink-400/0 via-pink-400/40 to-pink-400/0 rotate-45 opacity-30"></div>
    </>
  );
}

export function GreenDecorativeElements() {
  return (
    <>
      <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-16 left-8 opacity-10">
        <div className="w-24 h-24 border-4 border-green-300 rounded-full"></div>
        <div className="w-12 h-12 border-2 border-green-400 rounded-full absolute -bottom-4 -right-2"></div>
      </div>

      <div className="absolute bottom-12 right-12 opacity-10 rotate-12">
        <div className="w-16 h-16 border-4 border-green-300"></div>
        <div className="w-8 h-8 bg-green-400/30 absolute -top-4 -left-4"></div>
      </div>

      <div className="absolute top-1/3 left-1/4 opacity-15">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-green-300 rounded-full absolute"
            style={{
              top: `${i * 12}px`,
              left: `${i * 8}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-24 left-8 w-32 h-px bg-gradient-to-r from-green-400/0 via-green-400/40 to-green-400/0 rotate-45 opacity-30"></div>
    </>
  );
}
