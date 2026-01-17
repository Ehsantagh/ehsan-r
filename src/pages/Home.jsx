import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Show button after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroBoxClick = () => {
    navigate('/torch');
  };

  const handleStartButton = (e) => {
    e.stopPropagation();
    navigate('/torch');
  };

  return (
    <div className="home-page">
      <div
        className={`intro-box ${isHovered ? 'hovered' : ''}`}
        onClick={handleIntroBoxClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="intro-image">
          <img src="/images/home/char-1.png" alt="profile" />
        </div>

        {/* Title */}
        <h1 className="intro-title">
          {isHovered ? <img src="/images/home/torch.png" alt="torch" className="torch-image" /> : 'Hi, I am Ehsan'}
        </h1>

        {/* Subtitle */}
        <p className="intro-subtitle">
          {isHovered ? 'Grab the torch!' : 'Senior Product Designer'}
        </p>

        {/* Paragraph */}
        <p className={`intro-paragraph ${isHovered ? 'centered' : ''}`}>
          {isHovered
            ? ''
            : 'Designing complex digital products with a strong foundation in business, systems, and user-centred thinking.'}
        </p>

        {/* Start Button - Appears after 7 seconds */}
        {showButton && (
          <button className="start-button" onClick={handleStartButton}>
            Click to start →
          </button>
        )}
      </div>
    </div>
  );
}
