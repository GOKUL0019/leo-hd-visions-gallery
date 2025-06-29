import { motion } from 'framer-motion';
import { ChevronDown, Play, Image } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat"
          >
            <span className="text-gradient">Leo HD</span>
            <br />
            Video & Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Special Moments Captured in HD – Studio & Event Coverage
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mx-auto"
          >
            Professional Photography & Videography Services in Cuddalore, Tamil Nadu
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a href="#portfolio">
              <button className="group bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center gap-2">
                <Image className="h-5 w-5" />
                View Portfolio
              </button>
            </a>

            <a href="#watch-work">
              <button className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Our Work
              </button>
            </a>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-12"
          >
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">
                25+ Years Experience | 5000+ Events Covered
              </p>
              <div className="flex justify-center space-x-8 text-gold-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-xs text-gray-400">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">HD /4K</div>
                  <div className="text-xs text-gray-400">Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold-400 cursor-pointer"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-0"></div>
    </section>
  );
};

export default Hero;
