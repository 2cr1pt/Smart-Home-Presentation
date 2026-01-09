export default function TopicCircle({ topic, index, total, active }) {
  const RADIUS = 38; // percent

  const angle = (2 * Math.PI * index) / total - Math.PI / 2;

  const x = 50 + RADIUS * Math.cos(angle);
  const y = 50 + RADIUS * Math.sin(angle);

  return (
    <div
      className={`circle ${active ? "active" : ""}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {topic.title}
    </div>
  );
}
