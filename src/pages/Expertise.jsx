import { useState } from 'react';
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

  const handleCubeClick = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <div className="expertise-page">
      <div className="cube-container">
        <div
          className="cube"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
          onClick={handleCubeClick}
        >
          {/* Front Face */}
          <div className="cube-face front">
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360">
                <rect x="0" y="0" width="600" height="360" fill="white" />
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
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360">
                <rect x="0" y="0" width="600" height="360" fill="white" />
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
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360">
                <rect x="0" y="0" width="600" height="360" fill="white" />
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
            <div className="svg-wrapper">
              <svg className="face-frame" viewBox="0 0 600 360">
                <rect x="0" y="0" width="600" height="360" fill="white" />
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
    </div>
  );
}
