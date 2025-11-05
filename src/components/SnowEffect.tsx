import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    const numberOfFlakes = 50;

    for (let i = 0; i < numberOfFlakes; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 5, // 5-8 seconds
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 opacity
        size: Math.random() * 4 + 2, // 2-6px
        delay: Math.random() * 5, // 0-5 seconds delay
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-sm" />
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
