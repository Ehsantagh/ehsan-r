import React, { useContext, useEffect } from 'react'
import { BackgroundContext } from '../App'
import '../styles/cv.css'

export default function CV() {
  const { setBackgroundColor } = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundColor('#ffffff')
  }, [setBackgroundColor])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/Ehsan-CV.pdf'
    link.download = 'ehsan-cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
  <div className="cv-page">
    <button className="download-button" onClick={handleDownload}>
      Download CV ↓
    </button>

    <div className="cv-container">
      <div className="cv-content">
        <header className="cv-header">
          <h1>Ehsan Taghaddosi</h1>
          <p className="title">Senior Product Designer (UX / Product)</p>
          <p className="intro">
            Senior Product Designer with 10+ years of experience designing and scaling complex digital products, including e-commerce platforms and high-traffic transactional systems. Strong background in UX strategy, interaction design, and design systems, with hands-on delivery across discovery, prototyping, testing, and implementation. Experienced working closely with product, engineering, and marketing teams to deliver measurable business and customer outcomes. Skilled at bridging digital and physical product experiences and leading cross-functional teams.
          </p>
          
        </header>

        <section className="cv-section">
          <h2>Core Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Product & UX</h3>
              <p>
                UX strategy, discovery & research, journey mapping, information architecture,
                usability testing, service blueprints
              </p>
            </div>
            <div className="skill-item">
              <h3>UI & Interaction</h3>
              <p>
                Interaction design, responsive UI, design systems, accessibility,
                prototyping (Figma)
              </p>
            </div>
            <div className="skill-item">
              <h3>Delivery</h3>
              <p>
                End-to-end product design, experimentation, metrics-driven optimisation,
                design–engineering collaboration
              </p>
            </div>
            <div className="skill-item">
              <h3>Technical Literacy</h3>
              <p>
                HTML, CSS, JavaScript, React (working knowledge)
              </p>
            </div>
            <div className="skill-item">
              <h3>Collaboration</h3>
              <p>
                Stakeholder alignment, cross-functional workshops, mentoring designers
              </p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Professional Experience</h2>

          <div className="job">
            <div className="job-header">
              <h3>Head of Design & Digital Experience</h3>
              <p className="company">Linco Care – Manchester, UK | 2022 – Present</p>
            </div>
            <ul>
              <li>Senior IC role leading UX and UI across a multi-brand sun-care e-commerce portfolio.</li>
              <li>
                Led end-to-end redesign of five Shopify-based e-commerce websites, covering discovery,
                UX architecture, UI, and development handover.
              </li>
              <li>
                Improved conversion and AOV through PDP/PLP optimisation, bundle-first purchase flows,
                and clearer product comparison logic.
              </li>
              <li>
                Designed and iterated educational UX tools including SPF finder, skin-type guidance,
                and UV index content, increasing content-to-commerce engagement.
              </li>
              <li>
                Built and maintained a cross-brand design system, improving consistency and reducing
                design and build time across releases.
              </li>
              <li>
                Worked closely with marketing, engineering, and leadership to balance commercial goals,
                regulatory constraints, and user needs.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h3>Senior Product Designer / Design Lead</h3>
              <p className="company">Niku – International (incl. UK subsidiary Moonshire) | 2013 – 2022</p>
            </div>

            <ul>
              <li>
                Led UX and UI design for a hardware–software self-service platform deployed across
                10,000+ kiosks in 35+ cities.
              </li>
              <li>
                Designed high-volume transactional flows across healthcare, hospitality, and retail,
                optimised for speed, accessibility, and error reduction.
              </li>
              <li>
                Defined and evolved touch-first interface standards and design systems for public,
                high-frequency usage.
              </li>
              <li>
                Worked closely with engineering and operations to ship reliable products under
                real-world constraints such as hardware limits, connectivity, and regulation.
              </li>
              <li>
                Mentored designers, reviewed work quality, and contributed to hiring and design standards.
              </li>
              <li>
                Led UK market localisation, adapting journeys, content, and compliance for a new market,
                and supporting go-to-market strategy through experience principles and product narratives.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h3>Senior Designer (Product & Industrial Design)</h3>
              <p className="company">Ekas Design Studio – International | 2008 – 2019</p>
            </div>
            <ul>
              <li>
                Delivered end-to-end product design for medical devices, consumer electronics,
                and digital–physical products.
              </li>
              <li>
                Led research, concept development, prototyping, and usability testing in collaboration
                with engineering teams.
              </li>
              <li>
                Supported clients in reducing manufacturing complexity and accelerating time-to-market.
              </li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
  <h2>Education</h2>
  <div className="education">
    <h3>Tehran Polytechnic University – Iran</h3>
    <p>MSc Industrial Design</p>
  </div>
  <div className="education">
    <h3>Art University of Tehran – Iran</h3>
    <p>BA Industrial Design</p>
  </div>
</section>

<section className="cv-section">
  <h2>Selected Awards</h2>
  <ul className="awards-list">
    <li><strong>A’ Design Award – Bronze</strong> | 2018</li>
    <li><strong>LICC Design Award – Finalist</strong> | 2022</li>
    <li><strong>Iran Design Center Award – Finalist</strong> | 2022</li>
  </ul>
</section>

<section className="cv-section">
  <h2>Tools</h2>
  <p>Figma, Adobe CC, HTML, CSS, JavaScript, React, Vibe coding, SolidWorks, Blender</p>
</section>

<footer className="cv-footer">
  <p>Last update: Jan 2026</p>
</footer>
      </div>
    </div>

    <button className="download-button" onClick={handleDownload}>
      Download CV ↓
    </button>
    <p><br /></p>
  </div>
)
}
