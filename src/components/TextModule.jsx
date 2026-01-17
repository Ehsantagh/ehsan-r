import '../styles/portfolio.css';

export default function TextModule({
  image,
  images,
  title,
  subtitle,
  body,
  caption,
  style,
}) {
  // Handle both string and array body formats
  const renderBody = (bodyContent) => {
    if (!bodyContent) return null;

    if (typeof bodyContent === 'string') {
      return <p>{bodyContent}</p>;
    }

    if (Array.isArray(bodyContent)) {
      return bodyContent.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index}>{item.content}</p>;
        }
        if (item.type === 'list') {
          return (
            <ul key={index}>
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
              ))}
            </ul>
          );
        }
        return null;
      });
    }

    return null;
  };

  return (
    <section className="text-module">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      {renderBody(body)}
      
      {/* Support for new images array structure */}
      {images && Array.isArray(images) && images.length > 0 ? (
        images.map((imageGroup, groupIndex) => (
          <div key={groupIndex}>
            <div className="text-module-image">
              {typeof imageGroup.src === 'string' ? (
                <img src={imageGroup.src} alt={title} style={imageGroup.style} />
              ) : Array.isArray(imageGroup.src) ? (
                imageGroup.src.map((img, index) => (
                  <img key={index} src={img} alt={`${title} ${index + 1}`} style={imageGroup.style} />
                ))
              ) : null}
            </div>
            {imageGroup.caption && (
              <div className="text-module-caption">
                {renderBody(imageGroup.caption)}
              </div>
            )}
          </div>
        ))
      ) : image ? (
        /* Fallback for legacy single image structure */
        <>
          <div className="text-module-image">
            {typeof image === 'string' ? (
              <img src={image} alt={title} style={style} />
            ) : Array.isArray(image) ? (
              image.map((img, index) => (
                <img key={index} src={img} alt={`${title} ${index + 1}`} style={style} />
              ))
            ) : null}
          </div>
          {caption && (
            <div className="text-module-caption">
              {renderBody(caption)}
            </div>
          )}
        </>
      ) : null}
    </section>
  );
}