export default function RadialItem({ index, total, Icon, active }) {
  const angle = (360 / total) * index;
  const radius = 280;

  return (
    <div
      className="radial-item"
      style={{
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
      }}
    >
      {/* dashed line */}
      <div className="dash-line" />

      {/* icon */}
      <div className={`icon-circle ${active ? "active" : ""}`}>
        <Icon size={26} />
      </div>
    </div>
  );
}
