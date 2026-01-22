import { useState, useEffect } from 'react';
import '../styles/expertise.css';

const EXPERTISE_DATA = [
  {
    title: 'Product Strategy & Discovery',
    items: [
      'Product discovery & opportunity framing',
      'UX strategy aligned to business goals',
      'Journey mapping & systems thinking',
      'Metrics-aware decision-making',
    ],
  },
  {
    title: 'Experience & Systems Design',
    items: [
      'End-to-end UX design',
      'Information architecture & user flows',
      'Interaction & visual design',
      'Design systems & component libraries',
      'Motion & micro-interactions',
    ],
  },
  {
    title: 'Leadership & Collaboration',
    items: [
      'Stakeholder alignment',
      'Cross-functional facilitation',
      'Mentoring & critique',
      'Design process definition',
    ],
  },
  {
    title: 'Technical & Production Fluency',
    items: [
      'Design–engineering collaboration',
      'HTML, CSS, JavaScript, React fluency',
      'Feasibility & implementation trade-offs',
      'Industrial design & manufacturing awareness',
    ],
  },
];

export default function Expertise() {
  const [rotation, setRotation] = useState(71);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragRotation, setDragRotation] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselDragging, setIsCarouselDragging] = useState(false);
  const [carouselDragStart, setCarouselDragStart] = useState({ x: 0, y: 0 });

  const handleCubeClick = () => {
    setRotation((prev) => prev + 90);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragRotation(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    setDragRotation(deltaX * 0.5);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setRotation((prev) => prev + dragRotation);
    setDragRotation(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setDragRotation(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStart.x;
    setDragRotation(deltaX * 0.5);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setRotation((prev) => prev + dragRotation);
    setDragRotation(0);
  };

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleCubeClick();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Carousel auto-rotation every 8 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(carouselInterval);
  }, []);

  const handleCarouselTouchStart = (e) => {
    setIsCarouselDragging(true);
    setCarouselDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleCarouselTouchMove = (e) => {
    if (!isCarouselDragging) return;
  };

  const handleCarouselTouchEnd = (e) => {
    if (!isCarouselDragging) return;
    const deltaX = e.changedTouches[0].clientX - carouselDragStart.x;
    setIsCarouselDragging(false);

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swiped right - go to previous
        setCarouselIndex((prev) => prev - 1);
      } else {
        // Swiped left - go to next
        setCarouselIndex((prev) => prev + 1);
      }
    }
  };

  const handleIndicatorClick = (index) => {
    setCarouselIndex(index);
  };

  return (
    <div className="expertise-page">
      <div className="cube-container">
        <div
          className="cube"
          style={{
            transform: `rotateY(${rotation + dragRotation}deg)`,
          }}
          onClick={handleCubeClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Front Face */}
          <div className="cube-face front">
            <img src="/images/home/expert-2.png" alt="expertise-bg" className="cube-bg-image" />
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect x="0" y="0" width="600" height="360" fill="red" />
                <rect x="0" y="0" width="600" height="360" fill="none" stroke="black" strokeWidth="3" />
                <rect x="40" y="30" width="270" height="190" fill="none" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <div className="face-texts">
              <h2 className="face-title">{EXPERTISE_DATA[0].title}</h2>
              <ul className="face-list">
                {EXPERTISE_DATA[0].items.map((item, index) => (
                  <li key={index} className="face-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Face */}
          <div className="cube-face right">
            <img src="/images/home/expert-2.png" alt="expertise-bg" className="cube-bg-image" />
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect x="0" y="0" width="600" height="360" fill="red" />
                <rect x="0" y="0" width="600" height="360" fill="none" stroke="black" strokeWidth="3" />
                <rect x="40" y="30" width="270" height="190" fill="none" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <div className="face-texts">
              <h2 className="face-title">{EXPERTISE_DATA[1].title}</h2>
              <ul className="face-list">
                {EXPERTISE_DATA[1].items.map((item, index) => (
                  <li key={index} className="face-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back Face */}
          <div className="cube-face back">
            <img src="/images/home/expert-2.png" alt="expertise-bg" className="cube-bg-image" />
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect x="0" y="0" width="600" height="360" fill="red" />
                <rect x="0" y="0" width="600" height="360" fill="none" stroke="black" strokeWidth="3" />
                <rect x="40" y="30" width="270" height="190" fill="none" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <div className="face-texts">
              <h2 className="face-title">{EXPERTISE_DATA[2].title}</h2>
              <ul className="face-list">
                {EXPERTISE_DATA[2].items.map((item, index) => (
                  <li key={index} className="face-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left Face */}
          <div className="cube-face left">
            <img src="/images/home/expert-2.png" alt="expertise-bg" className="cube-bg-image" />
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect x="0" y="0" width="600" height="360" fill="red" />
                <rect x="0" y="0" width="600" height="360" fill="none" stroke="black" strokeWidth="3" />
                <rect x="40" y="30" width="270" height="190" fill="none" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <div className="face-texts">
              <h2 className="face-title">{EXPERTISE_DATA[3].title}</h2>
              <ul className="face-list">
                {EXPERTISE_DATA[3].items.map((item, index) => (
                  <li key={index} className="face-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div 
        className="carousel-container"
        onTouchStart={handleCarouselTouchStart}
        onTouchMove={handleCarouselTouchMove}
        onTouchEnd={handleCarouselTouchEnd}
      >
        <div className="carousel-wrapper">
          {EXPERTISE_DATA.map((item, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                transform: `translateX(calc((${index} - ${carouselIndex % 4}) * 100%))`,
              }}
            >
              <img src="/images/home/expert-2.png" alt={item.title} className="carousel-image" />
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <ul className="carousel-list">
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex} className="carousel-list-item">{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {EXPERTISE_DATA.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === carouselIndex % 4 ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
