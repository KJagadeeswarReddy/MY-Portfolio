/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#blog">Blog</a> {/* Added Blog link */}
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
