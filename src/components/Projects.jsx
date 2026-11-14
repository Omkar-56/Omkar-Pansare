import { useState, useRef, useEffect, useCallback } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ChevronLeftIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const total = projects.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentXRef.current = e.touches[0].clientX;
    const diff = currentXRef.current - startXRef.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = currentXRef.current - startXRef.current;
    if (diff < -50) {
      handleNext();
    } else if (diff > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentXRef.current = e.clientX;
    const diff = currentXRef.current - startXRef.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = currentXRef.current - startXRef.current;
    if (diff < -50) {
      handleNext();
    } else if (diff > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#fef5da]">
      {/* Header with Navigation Controls */}
      <div className="reveal mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2c2e35]/75 uppercase">
            {"// 02 · What I've Built"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-[#2c2e35] tracking-tight leading-[1.08] mb-2">
              Featured Projects
            </h2>
            {/* <p className="font-body text-sm sm:text-base text-[#2c2e35]/80 max-w-md leading-relaxed">
              Selected full-stack web applications, scalable backend systems, and applied AI platforms.
            </p>*/}
          </div>

          {/* Left / Right Swipe Buttons in Header */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#2c2e35]/60 mr-2 tracking-wider">
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2c2e35]/25 hover:border-[#fa575e] hover:bg-[#fa575e] hover:text-white text-[#2c2e35] flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2c2e35]/25 hover:border-[#fa575e] hover:bg-[#fa575e] hover:text-white text-[#2c2e35] flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Swipable Carousel Viewport */}
      <div className="reveal relative">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex w-full"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {projects.map((project, idx) => (
              <div key={project.name} className="w-full flex-shrink-0 px-1">
                <ProjectCard
                  project={project}
                  projectIndex={idx}
                  totalProjects={total}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots & Direct Jump Pills */}
        <div className="flex items-center justify-center gap-2">
          {projects.map((proj, idx) => (
            <button
              key={proj.name}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to project ${proj.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#fa575e]"
                  : "w-2 bg-[#2c2e35]/25 hover:bg-[#2c2e35]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
