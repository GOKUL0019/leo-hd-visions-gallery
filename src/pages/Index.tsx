
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </motion.main>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <p className="text-gray-400">
              © 2024 Leo HD Video & Studio. All rights reserved. | 
              <span className="text-gold"> Cuddalore, Tamil Nadu</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Follow us on Instagram: 
              <a 
                href="https://www.instagram.com/leo_hd_video_cuddalore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-yellow-400 ml-2 transition-colors"
              >
                @leo_hd_video_cuddalore
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
