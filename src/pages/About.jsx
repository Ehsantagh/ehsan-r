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
            <p>I design digital products with clarity, usability, and measurable impact. My experience spans product design, UX, and complex service systems, giving me a pragmatic, outcome-driven approach grounded in real-world constraints: user needs, engineering limits, and business goals.</p>
            <p>I focus on designing scalable, end-to-end experiences, building design systems, and improving product performance, all while collaborating closely with engineers, product, and stakeholders.
</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>What shaped my approach</h3>
            <p>Before focusing fully on digital product design, I led design for large-scale products across multiple industries:</p>
            <a href="https://niku.co" target="_blank" rel="noopener noreferrer">Niku Kiosk</a> 
            <p>Led UX and UI design for a hardware–software ecosystem deployed in 10,000+ kiosks across healthcare, hospitality, and retail. Developed interface standards, design systems, and user journeys for high volume, high frequency usage, and contributed to team growth.</p>
            <a href="https://ekasdesign.com/en" target="_blank" rel="noopener noreferrer">Ekas studio</a> 
            <p>Delivered end-to-end product design for medical devices, consumer electronics, and service products, collaborating with engineering to move concepts to production efficiently.</p>
            <p>These experiences taught me how to design products that work for both users and business objectives.</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>How I work today</h3>
            <p>As a Senior Product Designer, I:<br/></p>
            <ul>
                <li>Think in systems and end-to-end journeys</li>
                <li>Prioritise clarity, usability, and measurable outcomes</li>
                <li>Collaborate closely with engineers, product managers, and stakeholders</li>
                <li>Design with scalability, performance, and maintainability in mind</li>
            </ul>
            <p><br/>Whether it’s e-commerce platforms, complex service flows, or design systems, my goal is always products that make sense for users and the business.</p>
            <p><br/></p> 
          </div>
          <div className="pair">
            <h3>Outside the title</h3>
            <p>I enjoy mentoring designers, exploring how emerging tools improve workflows, and working at the intersection of digital and physical experiences.</p>
          </div>
          <div className="pair">
            <h3></h3>
            <p>Currently based in London, I’m open to Senior Product Designer roles where design has real influence and ownership is valued.</p>
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
