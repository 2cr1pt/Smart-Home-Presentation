export default function TopicSlide({ slide }) {
  return (
    <div className="full-slide">
      <div className="slide-content-wrapper">

        {/* HEADING – FULL WIDTH */}
        {slide.heading && (
          <h2 className="slide-heading full">{slide.heading}</h2>
        )}

        {/* CONTENT ROW */}
        <div className="slide-content horizontal">

          {/* TEXT */}
          <div className="slide-text">
            <ul>
              {slide.points.map((point, i) => (
                <li
                  key={i}
                  style={{ animationDelay: `${i * 0.3}s` }}
                  className="bullet"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          {slide.image && (
            <div className="slide-image">
              <img src={slide.image} alt="Slide diagram" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
