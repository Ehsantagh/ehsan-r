import '../styles/portfolio.css';

export default function WorkCard({
  size = 'small',
  image,
  title,
  year,
  category,
  style,
}) {
  return (
    <article className={`work-card ${size}`}>
      <div className="work-card-image">
        <img src={image} alt={title} style={style} />
      </div>

      <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        <div className="work-card-meta">
          <span>{year}</span>
          <span>•</span>
          <span>{category}</span>
        </div>
      </div>
    </article>
  );
}