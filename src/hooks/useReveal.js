import { useEffect } from "react";

export default function useReveal(deps = []) {
  useEffect(() => {
    const scroller = document.getElementById("scroll-container");
    const els = document.querySelectorAll(".reveal:not(.visible)");
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      {
        root: scroller || null,
        threshold: 0.02,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
