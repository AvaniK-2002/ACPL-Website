import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface Trail extends Position {
  id: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setTrails((prev) => [
        ...prev.slice(-12), // keep last 12 trails
        { ...newPos, id: Math.random() },
      ]);
    };

    const addHoverEffect = () => setIsHovering(true);
    const removeHoverEffect = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .custom-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 200, 255, 0.6);
          box-shadow: 0 0 15px rgba(0, 200, 255, 0.8), 0 0 30px rgba(0, 200, 255, 0.6);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 10000;
          transition: transform 0.15s ease, background 0.3s ease;
        }

        .custom-cursor.cursor-hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(6px) saturate(150%); /* glass/mirror effect */
  -webkit-backdrop-filter: blur(6px) saturate(150%);
}



        
        @keyframes trailFade {
          from {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
        }
      `}</style>

      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
