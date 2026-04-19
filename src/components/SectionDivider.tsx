import React from "react";

interface SectionDividerProps {
  color: string;
  className?: string;
  position?: "top" | "bottom";
  reverse?: boolean;
}

export function SectionDivider({ 
  color, 
  className = "", 
  position = "bottom",
  reverse = false 
}: SectionDividerProps) {
  // A clean, high-precision arc for institutional medical standard
  const path = "M0 0C480 80 960 80 1440 0V80H0V0Z";
  
  return (
    <div 
      className={`absolute left-0 right-0 w-full overflow-hidden leading-[0] z-20 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
      style={{ pointerEvents: "none" }}
    >
      <svg 
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none" 
        className={`w-full h-[40px] md:h-[60px] lg:h-[80px] block ${
          position === "top" ? "rotate-180" : ""
        } ${reverse ? "scale-x-[-1]" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}
