import { useState, useEffect, useRef, useCallback } from "react";

/*
  Multilingual Intro Flow (Seamless Unified Edge-to-Edge Zoom & Reveal):
  1. Greetings cycle in requested order:
     English -> Hindi -> Marathi -> French -> Portuguese -> German -> Spanish -> Japanese -> Italian (Ciao).
  2. For Italian ("Ciao"), the dot above the "i" is rendered in coral #fa575e, placed closely just above the stem.
  3. The moment "Ciao" settles:
     - The letters "C", "ı", "a", "o" fade out smoothly in place (0.25s).
     - The coral dot above the "i" NEVER fades or disappears—it remains 100% solid and visible at its exact screen coordinate.
     - The screen zooms directly inside this coral dot via vector clip-path geometry
       expanding smoothly from the dot's exact radius to 160vmax, naturally reaching and engulfing the entire screen (0.75s).
  4. Once solid coral fills the screen, the entire layer slides upward (translateY -100%) like
     an editorial curtain (0.6s), smoothly and simultaneously unveiling the portfolio and its scrollbar.
*/

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "Bonjour", lang: "French" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Guten Tag", lang: "German" },
  { text: "Hola", lang: "Spanish" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Ciao", lang: "Italian", isItalian: true },
];

export default function LoadingScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("cycling"); // "cycling" -> "fadeText" -> "zoomDot" -> "reveal" -> "done"
  const [dotCoords, setDotCoords] = useState({ x: 0, y: 0, r: 8 });
  const dotRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const triggerZoom = useCallback(() => {
    // Record exact center & radius of the coral dot above the 'i'
    if (dotRef.current) {
      const rect = dotRef.current.getBoundingClientRect();
      setDotCoords({
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2),
        r: Math.round(rect.width / 2) || 8,
      });
    }

    // Step 1: Smoothly fade out only the letters in place (the coral dot remains 100% solid and visible)
    setPhase("fadeText");

    // Step 2: Expand the coral dot to full screen smoothly
    setTimeout(() => {
      setPhase("zoomDot");
    }, 240);

    // Step 3: Curtain slides up once screen is full coral
    setTimeout(() => {
      setPhase("reveal");
    }, 1040);

    // Step 4: Finished, cleanly unmount
    setTimeout(() => {
      setPhase("done");
      if (onCompleteRef.current) onCompleteRef.current();
    }, 1640);
  }, []);

  // Cycle through greetings in exact requested order
  useEffect(() => {
    let idx = 0;
    const intervalTime = 180; // ms per greeting

    const interval = setInterval(() => {
      idx += 1;
      if (idx < greetings.length) {
        setCurrentIndex(idx);
      } else {
        clearInterval(interval);
        // Pause on Italian "Ciao" so the coral dot above the "i" visually settles
        setTimeout(() => {
          triggerZoom();
        }, 380);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [triggerZoom]);

  if (phase === "done") return null;

  const current = greetings[currentIndex];
  const isFadingLetters = phase === "fadeText" || phase === "zoomDot" || phase === "reveal";
  const isZooming = phase === "zoomDot" || phase === "reveal";
  const isRevealing = phase === "reveal";

  return (
    <>
      {/* ── Base Cream Screen (#fef5da) spanning 100% edge-to-edge ── */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center bg-[#fef5da] select-none"
        style={{
          opacity: isRevealing ? 0 : 1,
          transition: isRevealing ? "opacity 0.2s ease-out 0.2s" : "none",
          pointerEvents: isRevealing ? "none" : "auto",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#2c2e35] tracking-tight leading-none">
            {current.isItalian ? (
              <span className="inline-flex items-baseline justify-center">
                {/* Letter C fades out */}
                <span
                  style={{
                    opacity: isFadingLetters ? 0 : 1,
                    transition: "opacity 0.25s ease-out",
                  }}
                >
                  C
                </span>
                <span className="relative inline-block leading-none mx-[0.01em]">
                  {/* Dotless "ı" stem fades out */}
                  <span
                    style={{
                      opacity: isFadingLetters ? 0 : 1,
                      transition: "opacity 0.25s ease-out",
                    }}
                  >
                    ı
                  </span>
                  {/* Coral #fa575e Dot: NEVER fades out. Positioned closely just above stem */}
                  <span
                    ref={dotRef}
                    className="absolute -top-[0.04em] left-1/2 -translate-x-1/2 w-[0.2em] h-[0.2em] rounded-full bg-[#fa575e]"
                    style={{
                      opacity: 1,
                    }}
                  />
                </span>
                {/* Letters ao fade out */}
                <span
                  style={{
                    opacity: isFadingLetters ? 0 : 1,
                    transition: "opacity 0.25s ease-out",
                  }}
                >
                  ao
                </span>
              </span>
            ) : (
              <span
                style={{
                  opacity: isFadingLetters ? 0 : 1,
                  transition: "opacity 0.25s ease-out",
                }}
              >
                {current.text}
              </span>
            )}
          </h1>
        </div>
      </div>

      {/* ── Vector Expanding Dot Overlay (Edge-to-edge vector circle zoom) ── */}
      <div
        className="fixed inset-0 z-[102] bg-[#fa575e] pointer-events-none select-none"
        style={{
          clipPath: isZooming
            ? `circle(160vmax at ${dotCoords.x}px ${dotCoords.y}px)`
            : `circle(${dotCoords.r}px at ${dotCoords.x}px ${dotCoords.y}px)`,
          transition: isZooming
            ? "clip-path 0.75s cubic-bezier(0.35, 0, 0.15, 1)"
            : "none",
          opacity: isZooming ? 1 : 0,
          transform: isRevealing ? "translateY(-100%)" : "translateY(0%)",
          ...(isRevealing
            ? {
                transition:
                  "transform 0.6s cubic-bezier(0.65, 0, 0.15, 1), clip-path 0s 0.75s",
              }
            : {}),
        }}
      />
    </>
  );
}
