
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PhotoCube from "@/components/PhotoCube";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "wedding", name: "Weddings" },
    { id: "candid", name: "Candid" },
    { id: "traditional", name: "Traditional" },
    { id: "prewedding", name: "Pre-Wedding" }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "wedding",
      title: "Grand Wedding Ceremony",
      location: "Cuddalore",
      type: "Wedding Photography"
    },
    {
      id: 2,
      category: "candid", 
      title: "Candid Moments",
      location: "Pondicherry",
      type: "Candid Photography"
    },
    {
      id: 3,
      category: "traditional",
      title: "Traditional Portraits",
      location: "Chidambaram", 
      type: "Traditional Photography"
    },
    {
      id: 4,
      category: "prewedding",
      title: "Beach Pre-Wedding",
      location: "Mahabalipuram",
      type: "Pre-Wedding Shoot"
    },
    {
      id: 5,
      category: "wedding",
      title: "Reception Coverage",
      location: "Cuddalore",
      type: "Event Photography"
    },
    {
      id: 6,
      category: "candid",
      title: "Natural Expressions",
      location: "Kumbakonam",
      type: "Candid Photography"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of captured moments and artistic excellence
          </p>
        </motion.div>

        {/* 3D Photo Cube Display */}
        <motion.div
          className="h-96 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <PhotoCube />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Portfolio Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black font-semibold'
                  : 'glass-effect text-gray-300 hover:text-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-effect rounded-2xl overflow-hidden hover-glow group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Placeholder for image */}
              <div className="h-64 bg-gradient-to-br from-gold/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.location}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-gold text-sm font-medium">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Integration */}
        <motion.div
          className="text-center glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-2xl font-semibold text-gold mb-4">Follow Us on Instagram</h4>
          <p className="text-gray-300 mb-6">
            See our latest work and behind-the-scenes moments
          </p>
          <a
            href="https://www.instagram.com/leo_hd_video_cuddalore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-glow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.59 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @leo_hd_video_cuddalore
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
