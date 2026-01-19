import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TextModule from '../components/TextModule';
import Tabs from '../components/Tabs';
import Tabs4 from '../components/Tabs4';
import RelatedProjects from '../components/RelatedProjects';
import { worksData } from '../data/worksData';
import { project1Data } from '../data/project1Data';
import '../styles/portfolio.css';

export default function WorkTemplate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);

  const handleCategoryChange = (category) => {
    navigate(`/worklist?category=${encodeURIComponent(category)}`);
  };
  
  // Load Project 1 from separate data file, others from worksData
  let work;
  if (projectId === 1) {
    work = project1Data;
  } else {
    work = worksData.find(w => w.id === projectId);
  }

  // Helper function to render body content (string or array)
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

  if (!work) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1>Project not found</h1>
        <p>Sorry, we couldn't find the project you're looking for.</p>
      </div>
    );onCategoryChange={handleCategoryChange} 
  }

  return (
    <div style={{ backgroundColor: work.backgroundColor || '#ffffff', minHeight: '100vh' }}>
      <Navbar selectedCategory={work.category || 'All'} backgroundColor={work.backgroundColor || '#ffffff'} />

      <header className="work-header">
        <h1>{work.title}</h1>

        <div className="work-meta">
          <div>
            <span>Timeline</span>
            <p>{work.timeline}</p>
          </div>
          <div>
            <span>Team</span>
            <p>{work.team}</p>
          </div>
          <div>
            <span>Role</span>
            <p>{work.role}</p>
          </div>
        </div>

        <a 
          href={work.projectLink || 'https://calypsosun.com'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="work-header-link"
        >
          {work.projectLinkText || 'visit calypsosun.com'}
        </a>

        <div className="hero-image">
          <img src={work.heroImage} alt={work.title} />
        </div>
      </header>

      {projectId !== 1 && (
        <Tabs 
          tabs={[
            {
              label: 'Project summary',
              content: (
                <div className="work-body">
                  {work.summary && work.summary.map((item, index) => (
                    <div key={index} style={{ marginBottom: '2rem' }}>
                      <h3>{item.title}</h3>
                      {renderBody(item.body)}
                    </div>
                  ))}
                </div>
              )
            },
            {
              label: 'Methodology',
              content: (
                <div className="work-body">
                  {work.methodology && work.methodology.map((item, index) => (
                    <div key={index} style={{ marginBottom: '2rem' }}>
                      <h3>{item.title}</h3>
                      {renderBody(item.body)}
                    </div>
                  ))}
                </div>
              )
            }
          ]}
        />
      )}

      {projectId === 1 && (
        <main className="work-body">
          {work.sections.map((section) => (
            <div key={section.id}>
              {section.type === 'tabs' ? (
                <Tabs4 
                  tabs={section.tabs.map((tab) => ({
                    label: tab.label,
                    content: <div className="work-body">{renderBody(tab.content)}</div>
                  }))}
                />
              ) : section.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: section.html }} />
              ) : (
                <TextModule
                  image={section.image}
                  images={section.images}
                  title={section.title}
                  subtitle={section.subtitle}
                  body={section.body}
                  caption={section.caption}
                  style={section.style}
                />
              )}
            </div>
          ))}
        </main>
      )}

      {projectId !== 1 && (
        <main className="work-body">
          {work.sections.map(section => (
            <TextModule
              key={section.id}
              image={section.image}
              images={section.images}
              title={section.title}
              subtitle={section.subtitle}
              body={section.body}
              caption={section.caption}
              style={section.style}
            />
          ))}
        </main>
      )}

      <RelatedProjects currentProjectId={projectId} />
    </div>
  );
}