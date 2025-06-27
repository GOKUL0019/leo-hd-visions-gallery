
import Background3D from '../components/Background3D';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WatchWork from '../components/WatchWork';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
      {/* 3D Background */}
      <Background3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <WatchWork />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
