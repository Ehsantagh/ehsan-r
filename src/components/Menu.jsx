import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/menu.css';

const MENU_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/worklist' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'About', path: '/about' },
  { label: 'CV', path: '/CV' },
  { label: 'Contact', path: '/contact' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const isContactPage = location.pathname === '/contact';

  // Close menu when clicking anywhere outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isOpen]);

  const handleLadderClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (path, e) => {
    e.stopPropagation();
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : 'closed'} ${isContactPage ? 'contact-mode' : ''}`} ref={menuRef}>
      {/* Ladder Image - Clickable */}
      <div className="menu-ladder" onClick={handleLadderClick}>
        <img src={isContactPage ? '/images/home/menu-ladder-white.png' : '/images/home/menu-ladder.png'} alt="menu ladder" />
      </div>

      {/* Menu Text - Always visible */}
      {!isOpen && (
        <span className="menu-text" onClick={handleLadderClick}>Menu</span>
      )}

      {/* Menu Items */}
      <nav className="menu-items">
        <ul>
          {MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <button 
                className={location.pathname === item.path ? 'active' : ''}
                onClick={(e) => handleMenuItemClick(item.path, e)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
