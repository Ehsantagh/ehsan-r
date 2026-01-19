import { useNavigate } from 'react-router-dom';
import '../styles/portfolio.css';

export default function Navbar({ selectedCategory, onCategoryChange, backgroundColor = '#ffffff' }) {
  const items = ['All', 'UX/UI', 'Visual', 'Code', 'Industrial'];
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log('Navbar clicked:', item);
    // If onCategoryChange is provided, use local state (WorkList mode)
    if (onCategoryChange) {
      console.log('WorkList mode: filtering by', item);
      onCategoryChange(item);
    } else {
      // Otherwise navigate to WorkList with category parameter (WorkTemplate mode)
      console.log('WorkTemplate mode: navigating to /worklist?category=', item);
      navigate(`/worklist?category=${encodeURIComponent(item)}`);
    }
  };

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <ul className="navbar-menu">
        {items.map((item, index) => (
          <li key={`navbar-${index}-${item}`}>
            <button
              type="button"
              className={selectedCategory === item ? 'active' : ''}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="navbar-line" />
    </nav>
  );
}