/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

// Skills list - temporarily copied from About.jsx
// Ideally, this would come from a shared data source or props
const portfolioSkillsList = [
  "JavaScript (React)",
  "HTML5 & CSS3",
  "UI/UX Design Principles",
  "Responsive Web Design",
  "Version Control (Git)",
  "Prototyping Tools (Figma)",
];

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="padding portfolio-section" id="portfolio">
      <h2>Portfolio</h2>

      {/* Skills Section */}
      <div className="portfolio-skills-section">
        <h3>Key Skills</h3>
        <ul className="portfolio-skills-list">
          {portfolioSkillsList.map((skill) => (
            <li key={skill} className="portfolio-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Filter Placeholder */}
      <div className="filter-placeholder">
        <p>Project Filtering (Coming Soon!)</p>
        <div>
          <button type="button">All</button>
          <button type="button">Web Design</button>
          <button type="button">Development</button>
          <select>
            <option value="">Sort by...</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <div className="portfolio-grid-container">
        <div className="portfolio-image-column">
          <img
            src={image}
            // Removed inline styles, dimensions and object-fit are in CSS
            alt={imageAltText}
          />
        </div>
        <div className="portfolio-projects-grid">
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              onClick={() => openModal(project)}
              role="button" // Add role button for accessibility
              tabIndex={0} // Make it focusable
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(project);
              }} // Keyboard accessibility
            >
              <h3>{project.title}</h3>
              <p className="small">{project.description}</p>
              {/* Optional: A "View Details" link could be added here if needed,
                  but the primary interaction is now the modal. */}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Portfolio;
