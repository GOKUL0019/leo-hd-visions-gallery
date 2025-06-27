
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Leo HD Video</span>
          <br />
          <span className="text-white">& Studio</span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gold font-semibold">Special Moments Captured in HD</span>
          <br />
          Studio & Event Coverage in Cuddalore
        </motion.p>

        {/* Location Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-effect rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Based in Cuddalore, Tamil Nadu</span>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection("#portfolio")}
            className="bg-gold hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300 text-lg"
            size="lg"
          >
            View Portfolio
          </Button>
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
            size="lg"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">25+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">500+</div>
            <div className="text-gray-400">Events Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
