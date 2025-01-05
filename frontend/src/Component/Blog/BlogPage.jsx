import React, { useState } from 'react';
import styles from './blogPage.module.css'; // Importing CSS styles
import AboutNav from '../aboutnavbar/AboutNav';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: "SwiftMart Expands to New Cities",
      date: "January 5, 2025",
      author: "John Doe",
      excerpt: "SwiftMart continues to grow rapidly, expanding its services to new cities to offer faster delivery times and better customer experience.",
      link: "/blog/swiftmart-expands", // Use relative path for anchor link
    },
    {
      title: "How SwiftMart’s Technology is Changing E-commerce",
      date: "December 22, 2024",
      author: "Jane Smith",
      excerpt: "The role of technology in SwiftMart's operations. Discover how we are leveraging AI, data analytics, and automation to optimize our services.",
      link: "/blog/technology-in-ecommerce", // Use relative path for anchor link
    },
    {
      title: "Top Tips for SwiftMart Partners",
      date: "November 18, 2024",
      author: "Mark Brown",
      excerpt: "Learn how you can make the most out of your partnership with SwiftMart. Tips for increasing deliveries, boosting efficiency, and improving customer service.",
      link: "/blog/tips-for-partners", // Use relative path for anchor link
    },
    // Add more posts as necessary
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.blogPage}>
       <AboutNav />
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>SwiftMart Blog</h1>
        </div>
      </header>

      
      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search for blog posts..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      
      <section className={styles.postsSection}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className={styles.blogCard}>
              <h2 className={styles.blogTitle}>{post.title}</h2>
              <p className={styles.blogMeta}>
                <span className={styles.blogDate}>{post.date}</span> | 
                <span className={styles.blogAuthor}> by {post.author}</span>
              </p>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              
              <a href={post.link} className={styles.readMoreLink}>Read More</a>
            </div>
          ))
        ) : (
          <p className={styles.noPosts}>No blog posts found.</p>
        )}
      </section>

     
      <footer className={styles.footer}>
        <p>&copy; 2025 SwiftMart | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default BlogPage;
