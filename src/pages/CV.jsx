import React from 'react'
import '../styles/cv.css'

export default function CV() {
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
            <p className="title">Senior Product Designer with Hybrid Digital, Industrial & Business Background</p>
            <p className="intro">
              Senior Product Designer with a multidisciplinary background spanning UX, digital product, industrial design, and product innovation. I lead cross-functional teams to deliver intuitive, high-performance products that balance user needs with business goals. Experienced in taking products from concept to market, building design systems, and mentoring teams to elevate design quality and outcomes. Skilled at bridging digital and physical experiences to create cohesive, end-to-end product ecosystems.
            </p>
          </header>

          <section className="cv-section">
            <h2>Core Skills & Design Proficiencies</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>Leadership</h3>
                <p>Product strategy & delivery, stakeholder alignment, mentoring, cross-functional collaboration</p>
              </div>
              <div className="skill-item">
                <h3>User Experience</h3>
                <p>Research, journey mapping, IA, prototyping, usability testing, UX strategy</p>
              </div>
              <div className="skill-item">
                <h3>Interface Design</h3>
                <p>Visual design, design systems, interaction design, UI prototyping, 3D/2D animation</p>
              </div>
              <div className="skill-item">
                <h3>Development</h3>
                <p>HTML, CSS, JavaScript, React, design–dev collaboration</p>
              </div>
              <div className="skill-item">
                <h3>Industrial Design</h3>
                <p>SolidWorks, Blender, rapid prototyping, DFM, materials & processes, 3D visualisation</p>
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2>Key Achievements</h2>
            
            <div className="achievement">
              <h3>Linco Care — Multi-Platform E-Commerce Redesign</h3>
              <ul>
                <li>Led multi-platform e-commerce redesign across five websites, improving conversion through PDP/PLP optimisation and increasing average order value with bundle-focused flows.</li>
                <li>Strengthened brand trust with science-aligned digital storytelling and high-impact visual narratives, significantly increasing customer engagement and unifying cross-platform consistency.</li>
                <li>Elevated customer experience by improving NPS, sustainability messaging, and skin-type guidance; boosted engagement with educational tools (UV index, SPF quiz, application guides), increasing content-to-commerce conversion.</li>
              </ul>
            </div>

            <div className="achievement">
              <h3>Niku Self-Service Ecosystem — Co-Founder & Design Director</h3>
              <ul>
                <li>Pioneered the self-service industry in Iran by designing an integrated ecosystem of hardware and a set of kiosk interfaces, resulting in the deployment of 10,000+ kiosks across 35 cities and securing 92% market share in medical, 45% in hospitality, and 30% in ordering sector by 2025.</li>
                <li>Drove product vision, UX, UI, and industrial design, establishing Niku as the category-defining leader in simple, reliable self-service technology.</li>
              </ul>
            </div>

            <div className="achievement">
              <h3>Ekas Design Studio — Co-Founder & Senior Designer</h3>
              <ul>
                <li>Co-founded and grew one of Iran's leading industrial design studios, collaborating with more than 40 companies across medical technology, consumer electronics, and packaging.</li>
                <li>Directed end-to-end product design from research to production, contributing to multiple award-winning products in international competitions and helping clients reduce manufacturing complexity, differentiate their offerings, and accelerate time-to-market.</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2>Work Experience</h2>

            <div className="job">
              <div className="job-header">
                <h3>Head of Design & Digital Experience</h3>
                <p className="company">Linco Care, Manchester | 2022 – present</p>
              </div>
              <ul>
                <li>Led the transition of a traditional skincare brand into one with a strong digital presence. Managed UX/UI across multiple websites and e-commerce platforms, while also leading packaging design and visual communications.</li>
                <li>Introduced structured design workflows and digital guidelines.</li>
                <li>Used product thinking and iterative testing to improve conversion and engagement.</li>
                <li>Worked closely with marketing and engineering to align brand, business, and user needs.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h3>Director / Product Expansion & Experience Strategy</h3>
                <p className="company">Moonshire, London | 2020 – 2022</p>
              </div>
              <ul>
                <li>Led the UK expansion of Niku, a self-service technology company, blending business development with product and experience strategy.</li>
                <li>Applied product design insights to position kiosk solutions for a new market.</li>
                <li>Conducted opportunity mapping, competitive analysis, and experience localisation.</li>
                <li>Strengthened product narratives, value propositions, and user experience expectations.</li>
                <li>Acted as the bridge between design, technology, and commercial strategy.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h3>Co-founder & Design Director</h3>
                <p className="company">Niku, Iran | 2013 – 2021</p>
              </div>
              <ul>
                <li>Founded and scaled Iran's leading self-service technology company, delivering an integrated ecosystem of hardware and software products. Led product strategy based on clear market opportunities, resulting in category-defining kiosk designs that transformed the industry landscape.</li>
                <li>Defined product strategy from market gaps, leading to iconic kiosk designs that reshaped the industry.</li>
                <li>Built and directed industrial design, UX/UI, and research teams.</li>
                <li>Set experience standards for kiosk interfaces used by thousands of end users.</li>
                <li>Oversaw design system creation, prototype development, and user testing.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h3>Co-founder & Senior Designer</h3>
                <p className="company">Ekas Design Studio, Iran | 2008 – 2019</p>
              </div>
              <ul>
                <li>Worked across concept development, prototyping, UX research, and design-for-manufacturing.</li>
                <li>Led early-stage concept development for dozens of products.</li>
                <li>Built prototypes and conducted user testing sessions.</li>
                <li>Collaborated closely with engineering teams on DFM and technical refinement.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h3>Consultant & Associate Designer</h3>
                <p className="company">Tajrobeh Studio, Iran | 2016 – 2020</p>
              </div>
              <ul>
                <li>Supported UX, user research, IA, and visual systems for clients and startups.</li>
                <li>Conducted usability tests, interviews, and insight synthesis.</li>
                <li>Designed information architectures and early UX flows.</li>
                <li>Participated in UI design and systemisation efforts.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h3>Design Consultant</h3>
                <p className="company">Mahestan Resort, Iran | 2015 – 2019</p>
              </div>
              <ul>
                <li>Designed experience, story, and game concepts for a large theme park.</li>
                <li>Created narrative frameworks based on Persian mythology (Simorgh).</li>
                <li>Designed interactive games inspired by Iranian folklore.</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2>Education & Certifications</h2>
            <div className="education">
              <h3>Tehran Polytechnic University - Iran</h3>
              <p>MSc Industrial Design 2011</p>
            </div>
            <div className="education">
              <h3>Art University of Tehran - Iran</h3>
              <p>BA Industrial Design 2009</p>
            </div>
          </section>

          <section className="cv-section">
            <h2>Awards</h2>
            <ul className="awards-list">
              <li><strong>LICC Design award - Finalist</strong> | 2022 — Endoscope washing machine design</li>
              <li><strong>Iran Design Center award - Finalist</strong> | 2022 — Micro-spectrophotometer device design</li>
              <li><strong>A'Design award - Bronze medal</strong> | 2018 — Delivery box design</li>
              <li><strong>IDiran design award</strong> | 2017 — Delivery box design, self-service kiosk design</li>
              <li><strong>National Olympiad - Rank 3rd</strong> | 2009 — Industrial design national students olympiad</li>
            </ul>
          </section>

          <footer className="cv-footer">
            <p>Last update: Dec 2025</p>
          </footer>
        </div>
      </div>
      <button className="download-button" onClick={handleDownload}>
        Download CV ↓
      </button>
      <p><br/></p>
    </div>
  )
}
