import React from "react"
import Layout from "../components/Layout"
import PageContainer from "../components/PageContainer"
// import './Resume.css';

const Resume = () => {
  return (
    <Layout
      title="Chris Cooksey"
      navLinks={[{ to: "/projects", label: "Projects" }]}
    >
      <PageContainer>
          <section className="resume-section">
            <h1>Resume</h1>

            <div className="resume-content">
              <section className="experience">
                <h2>Experience</h2>
                <div className="entry">
                  <h3>Job Title</h3>
                  <p className="company">
                    Company Name | Start Date – End Date
                  </p>
                  <ul>
                    <li>Achievement or responsibility</li>
                    <li>Achievement or responsibility</li>
                  </ul>
                </div>
              </section>

              <section className="education">
                <h2>Education</h2>
                <div className="entry">
                  <h3>Degree Name</h3>
                  <p className="school">School Name | Graduation Year</p>
                </div>
              </section>

              <section className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                  <span className="skill">JavaScript</span>
                  <span className="skill">React</span>
                  <span className="skill">CSS</span>
                </div>
              </section>
            </div>
          </section>
      </PageContainer>
    </Layout>
  )
}

export default Resume
