import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Camera, Users, Heart, Plane } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: Camera },
    { id: 'weddings', name: 'Weddings', icon: Heart },
    { id: 'studio', name: 'Studio Portraits', icon: Users },
    { id: 'candid', name: 'Candid Moments', icon: Camera },
    { id: 'drone', name: 'Drone Shots', icon: Plane },
    { id: 'instagram', name: 'More on Instagram', icon: Camera }, // New button
  ];

  const portfolioImages = [
    { id: 1, category: 'weddings', title: 'Traditional Wedding Ceremony', image: '2rt.png', description: 'Beautiful traditional wedding photography' },
    { id: 2, category: 'studio', title: 'Professional Portrait', image: '5rt.png', description: 'Studio portrait with professional lighting' },
    { id: 3, category: 'candid', title: 'Candid Family Moment', image: '1rt.png', description: 'Natural family photography' },
    { id: 4, category: 'candid', title: 'Aerial Wedding Shot', image: '6rt.png', description: 'Stunning aerial view of wedding venue' },
    { id: 5, category: 'weddings', title: 'Bridal Portrait', image: '3rt.png', description: 'Elegant bridal photography' },
    { id: 12, category: 'weddings', title: 'Bridal Portrait', image: '4rt.png', description: 'Elegant bridal photography' },
    
    { id: 7, category: 'candid', title: 'Childhood Joy', image: '7rt.png', description: 'Capturing precious childhood moments' },
    { id: 8, category: 'drone', title: 'Landscape Beauty', image: '8rt.png', description: 'Breathtaking aerial landscape' },
    { id: 9, category: 'studio', title: 'Professional Portrait', image: '9rt.png', description: 'Studio portrait with professional lighting' },
    { id: 11, category: 'studio', title: 'Professional Portrait', image: '11rt.png', description: 'Studio portrait with professional lighting' },
    { id: 10, category: 'candid', title: 'Childhood Joy', image: '10rt.png', description: 'Capturing precious childhood moments' },
  ];

  const filteredImages = activeCategory === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black/60 to-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of captured moments and artistic creations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id === 'instagram') {
                  window.open('https://www.instagram.com/leo_hd_video_cuddalore/', '_blank');
                } else {
                  setActiveCategory(category.id);
                }
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-500 text-black font-semibold'
                  : 'glass-effect text-white hover:bg-white/10'
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
