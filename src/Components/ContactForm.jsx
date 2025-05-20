import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission feedback, can be expanded later
    alert("Thank you for your message! (Form submission is not yet implemented.)");
  };

  return (
    <div className="contact-form-section">
      <h3>Get in Touch</h3>
      <p>Have a question or want to work together? Send a message!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
