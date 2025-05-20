import React from "react";

const blogPostsData = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch",
    snippet: "Discover the upcoming trends in web design that are set to redefine user experiences in the coming years. From AI integration to immersive 3D elements...",
    date: "October 26, 2023",
    readMoreLink: "#", // Placeholder link
  },
  {
    id: 2,
    title: "A Deep Dive into Responsive Typography",
    snippet: "Typography plays a crucial role in readability and aesthetics. This post explores techniques for ensuring your text looks great on all devices.",
    date: "October 15, 2023",
    readMoreLink: "#",
  },
  {
    id: 3,
    title: "10 Tips for a User-Friendly Mobile Navigation",
    snippet: "Mobile navigation can make or break the user experience. Here are 10 actionable tips to create intuitive and effective mobile menus.",
    date: "September 30, 2023",
    readMoreLink: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="padding blog-section">
      <h2>From the Blog</h2> {/* Removed redundant inline style */}
      <div className="blog-grid">
        {blogPostsData.map((post) => (
          <div key={post.id} className="blog-post-item">
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-snippet">{post.snippet}</p>
            <a href={post.readMoreLink} className="blog-read-more">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
