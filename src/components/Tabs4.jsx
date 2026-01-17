import { useState } from 'react';
import '../styles/tabs4.css';

export default function Tabs4({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs4-container">
      <div className="tabs4-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab4-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs4-content">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}
