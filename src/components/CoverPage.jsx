import { useEffect, useState } from "react";

export default function CoverPage({
  title,
  subtitle,
  logo,
  authors = [],
  supervisor,
  visible,
}) {
  const [exiting, setExiting] = useState(false);

  // When visible turns false → play exit animation
  useEffect(() => {
    if (!visible) {
      setExiting(true);
    }
  }, [visible]);

  // Keep component mounted during exit animation
  if (!visible && !exiting) return null;

  return (
    <div className={`cover ${exiting ? "cover-exit" : ""}`}>
      {/* BACKGROUND VIDEO */}
      <video
        className="cover-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/cover-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="cover-overlay">
        {logo && (
          <img
            src={logo}
            alt="Project Logo"
            className="cover-logo"
          />
        )}

        <h1 className="cover-title">{title}</h1>

        {subtitle && (
          <p className="cover-subtitle">{subtitle}</p>
        )}

        {authors.length > 0 && (
          <div className="cover-authors">
            <strong>By</strong>
            {authors.map((name, i) => (
              <span key={i}>{name}</span>
            ))}
          </div>
        )}

        {supervisor && (
          <div className="cover-supervisor">
            Supervisor: <strong>{supervisor}</strong>
          </div>
        )}

        <div className="cover-hint">
          Press <strong>Space</strong> to begin
        </div>
      </div>
    </div>
  );
}
