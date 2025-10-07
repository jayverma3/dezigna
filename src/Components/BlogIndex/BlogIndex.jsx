import React, { useState } from "react";
import "./BlogIndex.css";

const articles = [
  {
    title: "The Top 5 Interior Design Trends for 2025",
    category: "Trends",
    image:
      "images/DEZIGNA_SERVICES/CABINETS/pexels-curtis-adams-1694007-5008398.jpg",
    excerpt:
      "Cover the styles that are shaping the future of home interiors, from sustainable materials to bold color palettes.",
  },
  {
    title: "A Guide to Choosing the Perfect Kitchen Countertop",
    category: "Guides",
    image: "images/DEZIGNA_SERVICES/COUNTERTOPS/pexels-atbo-66986-245219.jpg",
    excerpt:
      "From granite to quartz, we break down the pros and cons of each material to help you make an informed decision.",
  },
  {
    title: "DIY Tips for a Weekend Bathroom Refresh",
    category: "Tips",
    image: "images/DEZIGNA_SERVICES/TILES/pexels-andreea-ch-371539-1040895.jpg",
    excerpt:
      "Transform your bathroom in just two days with these simple and budget-friendly tips from our experts.",
  },
  {
    title: "Maximizing Small Spaces: Smart Design Solutions",
    category: "Articles",
    image: "images/DEZIGNA_SERVICES/CLOSETS/pexels-marywhitneyph-90319.jpg",
    excerpt:
      "Learn how to make the most of every square inch with clever storage, multi-functional furniture, and more.",
  },
  {
    title: "The Rise of Outdoor Kitchens: What to Consider",
    category: "Trends",
    image:
      "images/DEZIGNA_SERVICES/OUTDOOR_KITCHEN/pexels-conojeghuo-221445.jpg",
    excerpt:
      "Thinking of taking your culinary skills outdoors? Here’s everything you need to know before you start.",
  },
  {
    title: "Flooring 101: A Comprehensive Guide",
    category: "Guides",
    image: "images/DEZIGNA_SERVICES/FLOORING/pexels-pixabay-534151.jpg",
    excerpt:
      "From hardwood to luxury vinyl, we explore the best flooring options for every room in your house.",
  },
];

const categories = ["All", "Articles", "Guides", "Trends", "Tips"];

const BlogIndex = () => {
  const [filter, setFilter] = useState("All");

  const filteredArticles =
    filter === "All"
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <div className="blog-index-container">
      <div className="blog-index-header">
        <h2>Design & Inspire</h2>
        <p>
          Your source for the latest articles, guides, and trends in home
          design.
        </p>
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="article-grid">
        {filteredArticles.map((article, index) => (
          <div className="article-card" key={index}>
            <div className="article-image-container">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
            </div>
            <div className="article-content">
              <span className="article-category">{article.category}</span>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href="#" className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
