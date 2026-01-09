import { useEffect, useState } from "react";
import Overview from "./components/Overview";
import { topics } from "./data/topics";
import { slides } from "./data/slides";

export default function App() {
  // cover → overview → zoom → slide
  const [viewMode, setViewMode] = useState("cover");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
  const detectRatio = () => {
    const ratio = window.innerWidth / window.innerHeight;

    // 4:3 projectors are usually ~1.33
    if (ratio < 1.45) {
      document.body.classList.add("ratio-4-3");
      document.body.classList.remove("ratio-16-9");
    } else {
      document.body.classList.add("ratio-16-9");
      document.body.classList.remove("ratio-4-3");
    }
  };

  detectRatio();
  window.addEventListener("resize", detectRatio);
  return () => window.removeEventListener("resize", detectRatio);
}, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== "Space") return;
      e.preventDefault();

      /* =====================
         FORWARD (SPACE)
      ===================== */
      if (!e.shiftKey) {
        // COVER → OVERVIEW
        if (viewMode === "cover") {
          setViewMode("overview");
          return;
        }

        // OVERVIEW → ZOOM (current / first topic)
        if (viewMode === "overview") {
          setActiveIndex((prev) => (prev === -1 ? 0 : prev));
          setViewMode("zoom");
          return;
        }

        // ZOOM → SLIDES
        if (viewMode === "zoom") {
          setSlideIndex(0);
          setViewMode("slide");
          return;
        }

        // SLIDES → NEXT SLIDE OR NEXT TOPIC
        if (viewMode === "slide") {
          const topicSlides = slides[activeIndex].slides;

          if (slideIndex < topicSlides.length - 1) {
            setSlideIndex((s) => s + 1);
          } else {
            // move to NEXT topic
            if (activeIndex < topics.length - 1) {
              setActiveIndex((i) => i + 1);
            }
            setViewMode("overview");
          }
          return;
        }
      }

      /* =====================
         BACKWARD (SHIFT + SPACE)
      ===================== */
      else {
        // SLIDES → PREVIOUS SLIDE OR ZOOM
        if (viewMode === "slide") {
          if (slideIndex > 0) {
            setSlideIndex((s) => s - 1);
          } else {
            setViewMode("zoom");
          }
          return;
        }

        // ZOOM → OVERVIEW
        if (viewMode === "zoom") {
          setViewMode("overview");
          return;
        }

        // OVERVIEW → PREVIOUS TOPIC OR COVER
        if (viewMode === "overview") {
          if (activeIndex > 0) {
            setActiveIndex((i) => i - 1);
            setViewMode("zoom");
          } else {
            // only go to cover at the very beginning
            setViewMode("cover");
          }
          return;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, activeIndex, slideIndex]);

  return (
    <Overview
      viewMode={viewMode}
      activeIndex={activeIndex}
      slideIndex={slideIndex}
    />
  );
}
