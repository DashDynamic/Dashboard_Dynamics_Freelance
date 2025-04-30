import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Wireless EVs leading the way to a pollution-free transportation",
    date: "Monday, Jan 22, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Wireless Charging",
    readTime: "8 min read",
   content: `
<p>In the world of sustainable transportation, wireless electric vehicles (EVs) shine as a symbol of hope for a cleaner tomorrow. Building on the benefits of regular EVs, wireless EVs bring exciting advantages that could transform how we drive and power our cars.</p>

<p>The best part about Wireless EVs is that they produce zero tailpipe emissions. With no physical charging cords, they encourage more electric transportation, fighting air pollution and climate change. These eco-friendly vehicles emit zero carbon dioxide, nitrogen oxides, and harmful particles, making them a powerful solution for our planet.</p>

<img src="/assets/Blog/blog1.png" alt="EV Growth" />


<p>Not just that, wireless EV charging could revolutionize energy efficiency. By cutting waste during charging, these systems promote greener energy use and ease the pressure on the power grid.</p>

<p>And there's more! Wireless EVs help us embrace renewable energy. Smart charging systems can tap into solar or wind power, making these vehicles run on cleaner energy and creating a cycle of sustainability.</p>

<p>Lastly, when we imagine quieter cities, don’t wireless EVs come into the picture? Without engine noise, public spaces would become peaceful and more enjoyable, making life better for all of us.</p>

<p>Wireless EVs mark a new chapter in eco-friendly transportation. On this National Pollution Control Day, let’s reflect on the environmental hazards posed by ICE and chart a sustainable path forward with wireless EVs.</p>
`,

    tags: ["WIRELESS CHARGING", "EV", "EV CHARGING", "FLEET"],
    // image: "/assets/Blog/blog1.png"
// Make sure this is placed in your public folder
  },
  {
    id: 2,
    title: "Our Evolving EV Landscape in India: Growth or Transformation?",
    date: "Tuesday, Jan 16, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Market Insights",
    readTime: "6 min read",
   content: `
<p>The Indian EV market is undergoing rapid transformation, marked by both challenges and milestones. Every time we assess the sector, there are conflicting narratives—some highlight surging growth, while others point to market hurdles. According to industry reports, EV adoption in India has seen remarkable progress, with a significant increase in sales, government incentives, and infrastructure development. In 2023, India’s EV sales crossed the 1.5 million mark, showcasing an upward trend that continues into 2024.</p>

<p>While global EV markets fluctuate due to regulatory shifts—such as the introduction of new tariffs in the U.S.—India remains committed to electrification. The Indian government has implemented progressive policies, such as FAME II subsidies and state-specific EV incentives, to accelerate adoption. With increasing consumer awareness, improved battery technology, and expanding charging infrastructure, India's EV penetration is steadily climbing.</p>

<img src="/assets/Blog/blog2.png" alt="EV Growth" />

<p><strong>Fleet Electrification: The Catalyst for EV Growth in India</strong></p>

<p>Despite challenges like charging infrastructure gaps and initial costs, fleet adoption is proving to be a major driver of EV growth in India. Leading businesses and logistics firms are making significant investments in electrification to reduce operating costs and contribute to sustainability goals. According to market insights, India’s commercial EV fleet has grown by over 60% in the past year, driven by last-mile delivery services, shared mobility platforms, and corporate sustainability commitments.</p>

<p><strong>Why wireless charging is the future of fleet electrification in India</strong></p>

<p>As fleet operators transition from fuel-based vehicles to EVs, infrastructure remains a focal point. One of the critical decisions is wired vs. wireless charging. Many fleets in India are now considering wireless charging due to its lower total cost of ownership (TCO), reduced maintenance, and elimination of manual plugging and unplugging. Wireless charging also mitigates concerns over cable wear and tear, improves safety, and integrates seamlessly with Vehicle-to-Grid (V2G) solutions, helping optimize energy management.</p>

<p>At Dash Dynamic Private Limited, we are committed to advancing India's EV ecosystem by providing cutting-edge wireless charging solutions that simplify fleet operations and enhance efficiency. As the Indian EV market continues its upward trajectory, the question is no longer if fleet operators will adopt wireless charging, but how quickly.</p>

<p>Join us in driving India's EV revolution. The future of mobility is here.</p>
`,

    tags: ["WIRELESS CHARGING", "EV", "EV CHARGING", "FLEET"]
  }
  
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 0.7], ["15%", "0%"]);
  const rightY = useTransform(scrollYProgress, [0, 0.3, 0.7], ["45%", "20%", "0%"]);

  if (!blog) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-red-600">404 - Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div id="BlogDetail">
      <div className="content" ref={contentRef}>
        <Link to="/Blogs" className="back-link">
          ← Back to Blogs
        </Link>

        <motion.div style={{ y: leftY }}>
          <h1 className="blog-title">{blog.title}</h1>

          <div className="author-info">
            <span className="date">{blog.date} • {blog.readTime}</span>
            <div className="author">
              <a
                href="https://www.linkedin.com/in/ajeetprabhakar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="linkedin-icon" />
                <span>By <strong>{blog.author}</strong>, {blog.company}</span>
              </a>
            </div>
          </div>

          <p className="category"><strong>Category:</strong> {blog.category}</p>

          <hr className="divider" />

          {/* <div className="blog-content">
            {blog.content.trim().split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div> */}

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
 


          {blog.image && (
            <div className="blog-hero">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-detail__image"
              />
            </div>
          )}

          {blog.tags && (
            <div className="blog-tags">
              {blog.tags.map((tag, idx) => (
                <span className="tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div style={{ y: rightY }} className="pt-12"></motion.div>
      </div>
    </div>
  );
}
