import { useState, useEffect, useRef, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import Navbar from '../components/Navbar';
import { worksData } from '../data/worksData';
import { BackgroundContext } from '../App';
import '../styles/portfolio.css';

export default function WorkList() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');
  const { backgroundColor } = useContext(BackgroundContext);
  const [isGateOpen, setIsGateOpen] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');
  const [isShaking, setIsShaking] = useState(false);
  const [isGateEntered, setIsGateEntered] = useState(false);
  const placeholderResetTimer = useRef(null);
  const gateEnterTimer = useRef(null);
  const gateStorageKey = 'worklistGateUnlockedAt';
  const gateTtlMs = 60 * 60 * 1000;

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const lastUnlocked = Number(window.localStorage.getItem(gateStorageKey));
    if (!Number.isNaN(lastUnlocked) && Date.now() - lastUnlocked < gateTtlMs) {
      setIsGateOpen(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isGateOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGateOpen]);

  useEffect(() => {
    if (!isGateOpen) {
      setIsGateEntered(false);
      return;
    }
    setIsGateEntered(false);
    if (gateEnterTimer.current) {
      window.clearTimeout(gateEnterTimer.current);
    }
    gateEnterTimer.current = window.setTimeout(() => {
      setIsGateEntered(true);
    }, 0);
  }, [isGateOpen]);

  useEffect(() => () => {
    if (placeholderResetTimer.current) {
      window.clearTimeout(placeholderResetTimer.current);
    }
    if (gateEnterTimer.current) {
      window.clearTimeout(gateEnterTimer.current);
    }
  }, []);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (passwordInput.trim().toLowerCase() === 'afteryou') {
      window.localStorage.setItem(gateStorageKey, String(Date.now()));
      setIsGateOpen(false);
      setIsShaking(false);
      setPasswordPlaceholder('Password');
      return;
    }
    setPasswordInput('');
    setPasswordPlaceholder('Almost, try again!');
    if (placeholderResetTimer.current) {
      window.clearTimeout(placeholderResetTimer.current);
    }
    placeholderResetTimer.current = window.setTimeout(() => {
      setPasswordPlaceholder('Password');
    }, 2500);
    setIsShaking(true);
    window.setTimeout(() => setIsShaking(false), 400);
  };

  const filteredWorks = selectedCategory === 'All'
    ? worksData
    : worksData.filter(work => work.category === selectedCategory);

  const largeWork = filteredWorks[0];
  const smallWorks = filteredWorks.slice(1);

  return (
    <>
      <div className={`worklist-content ${isGateOpen ? 'is-blurred' : ''}`}>
        <Navbar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} backgroundColor={backgroundColor} />

        <main className="page-container">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Work</h1>

          {largeWork && (
            <Link to={`/work/${largeWork.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <WorkCard
                size="large"
                image={largeWork.heroImage}
                title={largeWork.title}
                year={largeWork.timeline}
                category={largeWork.category}
              />
            </Link>
          )}

          <div className="work-list-grid">
            {smallWorks.map(work => (
              <Link
                key={work.id}
                to={`/work/${work.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <WorkCard
                  image={work.heroImage}
                  title={work.title}
                  year={work.timeline}
                  category={work.category}
                />
              </Link>
            ))}
          </div>
        </main>
      </div>

      {isGateOpen && (
        <div className="password-gate" role="dialog" aria-modal="true" aria-label="Password gate">
          <form className={`password-gate-card ${isGateEntered ? 'is-entered' : ''} ${isShaking ? 'is-shaking' : ''}`} onSubmit={handleUnlock}>
            <p className="password-gate-title">Good design inside<br/> Password first</p>
            <input
              className="password-gate-input"
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder={passwordPlaceholder}
              autoFocus
            />
            <div className="password-gate-actions">
              <button className="password-gate-button" type="submit">
                Let me in
              </button>
              <Link className="password-gate-button secondary" to="/">
                Not now
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}