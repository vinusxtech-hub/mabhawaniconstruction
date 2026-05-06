"use client";

import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Add global event listeners to handle dragging outside the container
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video overflow-hidden rounded-xl select-none group cursor-ew-resize ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-md shadow-sm z-10">
        {afterLabel}
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center border-r-2 border-brand-gold shadow-[2px_0_10px_rgba(0,0,0,0.3)]"
        style={{
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      />

      {/* Before Label - Only show if slider is far enough to the right */}
      {sliderPosition > 15 && (
        <div
          className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-md shadow-sm z-10"
        >
          {beforeLabel}
        </div>
      )}

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize flex items-center justify-center z-20"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-brand-gold shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
        <div
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)] border-2 border-brand-gold relative z-10 transition-transform duration-150"
          style={{ transform: isDragging ? "scale(1.1)" : "scale(1)" }}
        >
          <MoveHorizontal className="w-5 h-5 text-brand-black" />
        </div>
      </div>

      {/* Instruction Overlay (fades out on hover/drag) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {!isDragging && (
          <div className="px-4 py-2 bg-black/60 text-white text-sm font-medium rounded-full mt-24">
            Drag to see before/after
          </div>
        )}
      </div>
    </div>
  );
}
