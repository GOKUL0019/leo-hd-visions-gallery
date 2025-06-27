
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Our Studio</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gold mb-4">
              Meet Venkatesh - Your Photography Expert
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With over <span className="text-gold font-semibold">25 years of experience</span> in 
              photography and videography, Venkatesh has been capturing life's most precious moments 
              with artistic vision and technical excellence.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in the heart of Cuddalore, Tamil Nadu, our studio has been the trusted choice 
              for families and couples looking to preserve their special moments. We have successfully 
              covered over <span className="text-gold font-semibold">500+ events</span>, from intimate 
              family gatherings to grand celebrations.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-effect p-6 rounded-lg text-center hover-glow">
                <div className="text-3xl font-bold text-gold mb-2">25+</div>
                <div className="text-gray-400">Years of Expertise</div>
              </div>
              <div className="glass-effect p-6 rounded-lg text-center hover-glow">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-400">Events Covered</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-gold to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">V</span>
                </div>
                <h4 className="text-xl font-semibold text-gold mb-2">Venkatesh</h4>
                <p className="text-gray-400">Founder & Lead Photographer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Professional Photography Since 1999</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Specialized in HD Video Production</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Expert in Traditional & Candid Styles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Cuddalore's Trusted Photography Partner</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 text-center glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-2xl font-semibold text-gold mb-4">Our Mission</h4>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            "To capture the essence of your special moments with artistic excellence and technical precision, 
            creating timeless memories that you'll treasure forever. Every frame tells a story, and we're here 
            to make sure yours is told beautifully."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
