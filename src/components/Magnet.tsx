import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distFromLeft = rect.left - e.clientX;
      const distFromRight = e.clientX - rect.right;
      const distFromTop = rect.top - e.clientY;
      const distFromBottom = e.clientY - rect.bottom;

      const isNear =
        distFromLeft < padding &&
        distFromRight < padding &&
        distFromTop < padding &&
        distFromBottom < padding;

      if (isNear) {
        setIsHovered(true);
        const deltaX = (e.clientX - centerX) / strength;
        const deltaY = (e.clientY - centerY) / strength;
        setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0px)`);
      } else {
        setIsHovered(false);
        setTransform("translate3d(0px, 0px, 0px)");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      style={{
        transform,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
