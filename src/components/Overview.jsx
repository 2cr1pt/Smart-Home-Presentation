import { useEffect, useState } from "react";
import { topics } from "../data/topics";
import { slides } from "../data/slides";
import CenterImage from "./CenterImage";
import TopicCircle from "./TopicCircle";
import TopicSlide from "./TopicSlide";
import CoverPage from "./CoverPage";

export default function Overview({ viewMode, activeIndex, slideIndex }) {
  const ZOOM = 1.25;

  let cameraTransform = "translate(0%, 0%) scale(1)";
  let cameraTransition = "transform 0.9s cubic-bezier(0.22,1,0.36,1)";

  if (viewMode === "zoom" && activeIndex >= 0) {
    const RADIUS = 38;
    const angle =
      (2 * Math.PI * activeIndex) / topics.length - Math.PI / 2;

    const x = 50 + RADIUS * Math.cos(angle);
    const y = 50 + RADIUS * Math.sin(angle);

    cameraTransform = `
      translate(${50 - x}%, ${50 - y}%)
      scale(${ZOOM})
    `;
  }

  /* =====================
     ROTATION (OVERVIEW)
  ===================== */
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (viewMode !== "overview") return;

    let raf;
    const rotate = () => {
      setRotation((r) => r + 0.0006);
      raf = requestAnimationFrame(rotate);
    };

    raf = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(raf);
  }, [viewMode]);

  /* =====================
     PROGRESS
  ===================== */
  const isSlide = viewMode === "slide";
  const totalSlides =
    isSlide && slides[activeIndex]
      ? slides[activeIndex].slides.length
      : 0;

  const currentSlide = isSlide ? slideIndex + 1 : 0;

  /* =====================
     RENDER
  ===================== */
  return (
    /* ===== AUTO-SCALE VIEWPORT ===== */
    <div className="viewport">

      {/* ===== FIXED 16:9 STAGE ===== */}
      <div className="stage scale-16-9">

        {/* COVER PAGE */}
        {viewMode === "cover" && (
          <CoverPage
            visible
            title="Smart Home IoT System"
            subtitle="Graduation Project Presentation"
            logo="/logo.png"
            authors={[
              "ENG: Ahmed Khalaf",
              "ENG: Khaled Salah",
              "ENG: Ahmed Hossam"
            ]}
            supervisor="Dr. Radwa Adel"
          />
        )}

        {/* CAMERA */}
        <div
          className="camera"
          style={{
            transform: cameraTransform,
            transition: cameraTransition,
          }}
        >
          <div className="canvas">
            <h1 className="center-title">
              {viewMode === "overview"
                ? "Life Automation by Wireless Communication"
                : topics[activeIndex]?.title}
            </h1>

            <CenterImage />

            {topics.map((topic, i) => (
              <TopicCircle
                key={topic.id}
                topic={topic}
                index={i}
                total={topics.length}
                rotation={rotation}
                active={i === activeIndex && viewMode === "zoom"}
              />
            ))}
          </div>
        </div>

        {/* SLIDE OVERLAY */}
        {viewMode === "slide" &&
          slides[activeIndex]?.slides?.[slideIndex] && (
            <TopicSlide
              title={slides[activeIndex].title}
              slide={slides[activeIndex].slides[slideIndex]}
            />
          )}

        {/* TEXT PROGRESS */}
        <div className="progress">
          {viewMode === "overview" && "Overview"}
          {viewMode === "zoom" &&
            `Topic ${activeIndex + 1} / ${topics.length}`}
          {viewMode === "slide" &&
            `Slide ${currentSlide} / ${totalSlides}`}
        </div>

        {/* PROGRESS BAR */}
        {viewMode === "slide" && (
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${(currentSlide / totalSlides) * 100}%`,
              }}
            />
          </div>
        )}

        {/* CIRCULAR INDICATOR */}
        <div className="circle-progress">
          <svg width="56" height="56">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="#6366f1"
              strokeWidth="4"
              fill="none"
              strokeDasharray={2 * Math.PI * 24}
              strokeDashoffset={
                (1 - (activeIndex + 1) / topics.length) *
                2 * Math.PI * 24
              }
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
        </div>

        {/* KEYBOARD HINT */}
        <div className="keyboard-hint">
          <div>Space → Next</div>
          <div>Shift + Space → Back</div>
        </div>

      </div>
    </div>
  );
}
