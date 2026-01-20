import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/torch.css';

// Define 6 distinct snap angles (in degrees)
const SNAP_ANGLES = [270, 30, 90, 150];
const SNAP_STRENGTH = 20; // degrees - how close to snap point before snapping

// Image data with links
const IMAGES_DATA = [
  { src: '/images/home/my-background.svg', alt: 'background', url: '/about' },
  { src: '/images/home/my-knowledge.svg', alt: 'knowledge', url: '/expertise' },
  { src: '/images/home/my-cv.svg', alt: 'cv', url: '/CV' },
  { src: '/images/home/my-work.svg', alt: 'work', url: '/worklist' },
  { src: '/images/home/my-contact.svg', alt: 'contact', url: '/contact' },
];

export default function TorchPage() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const [angleWidth, setAngleWidth] = useState(30);
  const [targetAngleWidth, setTargetAngleWidth] = useState(30);
  const containerRef = useRef(null);
  const targetRotationRef = useRef(0);
  const targetAngleWidthRef = useRef(30);

  // Get snap angle
  const getSnapAngle = (angle) => {
    // Normalize angle to 0-360
    let normalized = angle % 360;
    if (normalized < 0) normalized += 360;

    // Find closest snap angle
    let closest = SNAP_ANGLES[0];
    let minDiff = Math.abs(normalized - SNAP_ANGLES[0]);

    for (let snapAngle of SNAP_ANGLES) {
      const diff = Math.abs(normalized - snapAngle);
      if (diff < minDiff) {
        minDiff = diff;
        closest = snapAngle;
      }
    }

    // Apply snap strength - snap if within range
    if (minDiff < SNAP_STRENGTH) {
      return closest;
    }

    return normalized;
  };

  // Update refs when state changes
  useEffect(() => {
    targetRotationRef.current = targetRotation;
  }, [targetRotation]);

  useEffect(() => {
    targetAngleWidthRef.current = targetAngleWidth;
  }, [targetAngleWidth]);

  // Handle mouse/touch movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Get cursor position relative to viewport
    const clientX = e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY;

    if (clientX === undefined || clientY === undefined) return;

    // Calculate relative position from center
    const x = clientX - centerX;
    const y = clientY - centerY;

    // Calculate angle (atan2 gives angle from -180 to 180, where 0 is right)
    let angle = Math.atan2(y, x) * (180 / Math.PI);

    // Get snapped angle
    const snappedAngle = getSnapAngle(angle);
    setTargetRotation(snappedAngle);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMouseMove(e);
  };

  // Smooth rotation animation using continuous animation loop
  useEffect(() => {
    let animationFrameId;
    
    const animate = () => {
      setRotation((current) => {
        let diff = targetRotationRef.current - current;

        // Handle wrap-around (shortest path)
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        // Only continue animating if there's a noticeable difference
        if (Math.abs(diff) < 0.5) {
          return targetRotationRef.current;
        }

        // Smoothly approach target
        const newRotation = current + diff * 0.15;
        return newRotation;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Angle width dilation animation (random smooth pulsing)
  useEffect(() => {
    let animationFrameId;
    let changeTimer;

    const animateAngle = () => {
      setAngleWidth((current) => {
        const diff = targetAngleWidthRef.current - current;
        
        // Smoothly approach target
        const newAngle = current + diff * 0.015;
        return newAngle;
      });

      animationFrameId = requestAnimationFrame(animateAngle);
    };

    // Randomly pick new target angle width every 3-6 seconds
    const setNewTarget = () => {
      // Random angle between 15 and 60 degrees
      const newTarget = Math.random() * 45 + 15;
      setTargetAngleWidth(newTarget);
      changeTimer = setTimeout(setNewTarget, Math.random() * 3000 + 3000);
    };

    setNewTarget();
    animationFrameId = requestAnimationFrame(animateAngle);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(changeTimer);
    };
  }, []);

  return (
    <div className="torch-page">
      <div className="torch-container" ref={containerRef} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
        {/* Triangle SVG with dynamic angle */}
        {(() => {
          // Calculate triangle points based on dynamic angle width
          const angleRad = (angleWidth / 2) * (Math.PI / 180);
          const distance = 300;
          const x2 = distance * Math.cos(angleRad);
          const y2 = distance * Math.sin(angleRad);
          const x3 = distance * Math.cos(-angleRad);
          const y3 = distance * Math.sin(-angleRad);
          
          return (
            <svg className="torch-triangle" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }} viewBox="-200 -200 400 400">
              <polygon points={`0,0 ${x2},${y2} ${x3},${y3}`} fill="white" />
            </svg>
          );
        })()}

        {/* Torch Image */}
        <div className="torch-image-wrapper" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}>
          <img
            src="/images/home/torch.png"
            alt="torch"
            className="torch-image"
          />
        </div>

        {/* 5 Small Images positioned around the torch */}
        <div className="small-images-container">
          {IMAGES_DATA.map((image, index) => (
            <div
              key={index}
              className="small-image-item"
              style={{ transform: 'translate(-50%, -50%)' }}
              onClick={() => window.location.href = image.url}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
