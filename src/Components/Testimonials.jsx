import React from "react";

const testimonialsData = [
  {
    quote: "This is an amazing platform! The user interface is intuitive and the features are exactly what I needed. Highly recommended!",
    name: "Jane Doe",
    role: "CEO, Tech Solutions Inc.",
  },
  {
    quote: "Working with this team has been a fantastic experience. Their attention to detail and commitment to quality is outstanding.",
    name: "John Smith",
    role: "Product Manager, Innovate Corp.",
  },
  {
    quote: "I'm truly impressed by the level of professionalism and the results delivered. This service has significantly boosted our productivity.",
    name: "Alice Brown",
    role: "Marketing Lead, Creative Minds Co.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="padding testimonials-section">
      <h2>Testimonials</h2> {/* Removed redundant inline style */}
      <div className="testimonial-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
