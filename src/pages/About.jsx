import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/about.css'

export default function About() {
  const navigate = useNavigate()

  const handleViewWork = () => {
    navigate('/worklist')
  }

  const handleDownloadCV = () => {
    navigate('/CV')
  }

  return (
    <div className="about-page">
      <div className="about-center">
        <div className="about-box">
          <div className="pair">
            <h1><br/><br/></h1>
            <h3>About</h3>
            <p>I design products with a strong sense of ownership.</p>
            <p>My background spans product design, industrial design, and entrepreneurship — which means I've spent most of my career close to real constraints: markets, users, engineering limits, and business trade-offs.</p>
            <p>This has shaped how I approach UX today: pragmatic, outcome-driven, and grounded in how products actually ship and scale.</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>What shaped my approach</h3>
            <p>Before focusing fully on digital product design, I co-founded and led two design-driven companies.</p>
            <a href="https://niku.co" target="_blank" rel="noopener noreferrer">Niku Kiosk</a> 
            <p>One grew into a category-defining self-service platform, combining hardware, software, and service design, and scaling to over 10,000 deployed kiosks across multiple industries. I led everything from product vision and UX to industrial design systems and team growth.</p>
            <a href="https://ekasdesign.com/en" target="_blank" rel="noopener noreferrer">Ekas studio</a> 
            <p>Earlier, I co-founded an industrial design studio, working with over 40 companies across medical, consumer, and technology sectors — learning how to move from concept to production efficiently and responsibly.</p>
            <p>These experiences taught me how products succeed (and fail) beyond the design file.</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>How I work today</h3>
            <p>As a Senior Product Designer, I bring that founder mindset into digital work:<br/></p>
            <ul>
                <li>I think in systems and end-to-end journeys</li>
                <li>I care deeply about clarity, usability, and performance</li>
                <li>I collaborate closely with engineers and stakeholders</li>
                <li>I design with metrics, scalability, and long-term maintenance in mind</li>
            </ul>
            <p><br/>Whether working on e-commerce platforms, complex service flows, or design systems, my goal is always the same: create products that make sense for users and the business.</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>Outside the title</h3>
            <p>I enjoy working at the intersection of digital and physical experiences, mentoring designers, and exploring how emerging tools can improve design workflows and product thinking.</p>
          </div>
          <div className="pair">
            <h3></h3>
            <p>Currently based in London, I’m working as a Senior Product Designer and Head of Design & Digital Experience. I’m open to roles where design has real influence — and where ownership is valued.</p>
            <p><br/>Ehsan Taghaddosi<br/><br/></p>
        <div className="button-group">
          <button className="start-button" onClick={handleViewWork}>View my work →</button>
          <button className="start-button" onClick={handleDownloadCV}>Download CV →</button>
        </div>
            <h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></h1>
          </div>
        </div>

      </div>

      <div className="overlay">
        <img className="about-deco top" src="/images/home/gate.png" alt="decor" />
        <img className="about-deco bottom" src="/images/home/gate.png" alt="decor" />
      </div>
    </div>
  )
}
