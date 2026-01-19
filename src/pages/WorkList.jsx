import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import Navbar from '../components/Navbar';
import { worksData } from '../data/worksData';
import '../styles/portfolio.css';

export default function WorkList() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredWorks = selectedCategory === 'All'
    ? worksData
    : worksData.filter(work => work.category === selectedCategory);

  const largeWork = filteredWorks[0];
  const smallWorks = filteredWorks.slice(1);

  return (
    <>
      <Navbar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} backgroundColor="#ffffff" />
      
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
    </>
  );
}