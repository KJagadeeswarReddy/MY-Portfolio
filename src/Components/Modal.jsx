import React from "react";
import PropTypes from "prop-types";

const Modal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="modal-project-link">
            View Project
          </a>
        )}
        {/* Future: Could add project-specific image or more details here */}
      </div>
    </div>
  );
};

Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
    // Add other project properties if needed for the modal
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
