
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Traditional Photography",
      price: "₹15,000",
      description: "Classic posed photography for weddings and events",
      features: ["Professional poses", "Family portraits", "Ceremony coverage", "Edited photos"]
    },
    {
      title: "Traditional Videography", 
      price: "₹15,000",
      description: "Traditional style video documentation",
      features: ["Ceremony recording", "Reception coverage", "Basic editing", "HD quality"]
    },
    {
      title: "Candid Photography",
      price: "₹25,000", 
      description: "Natural, unposed moments captured beautifully",
      features: ["Candid shots", "Emotion capture", "Behind scenes", "Creative angles"],
      popular: true
    },
    {
      title: "Pre-Wedding Photography",
      price: "₹25,000",
      description: "Romantic pre-wedding shoot sessions",
      features: ["Location shoot", "Multiple outfits", "Props included", "Album creation"]
    },
    {
      title: "Cinematography",
      price: "₹25,000",
      description: "Cinematic video production with storytelling",
      features: ["Cinematic shots", "Color grading", "Music integration", "Story telling"],
      popular: true
    },
    {
      title: "Premium Albums",
      price: "₹15,000",
      description: "High-quality photo albums and printing",
      features: ["Premium materials", "Custom design", "Multiple sizes", "Fast delivery"]
    }
  ];

  const packages = [
    {
      title: "Basic Package",
      price: "₹35,000",
      duration: "Half Day",
      description: "Perfect for small ceremonies and intimate gatherings",
      features: [
        "Traditional Photography",
        "Basic Videography", 
        "200+ Edited Photos",
        "2-3 Hours Coverage",
        "Digital Delivery"
      ]
    },
    {
      title: "Premium Package",
      price: "₹50,000",
      duration: "Full Day", 
      description: "Complete coverage for your special day",
      features: [
        "Candid + Traditional Photos",
        "Cinematography",
        "500+ Edited Photos",
        "8-10 Hours Coverage",
        "Premium Album",
        "Same Day Highlights"
      ],
      featured: true
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional photography and videography services tailored to capture your special moments
          </p>
        </motion.div>

        {/* Individual Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`glass-effect p-6 rounded-2xl hover-glow relative ${
                service.popular ? 'border-2 border-gold' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full mt-6 bg-gold hover:bg-yellow-500 text-black font-semibold"
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Package Deals */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Package Deals</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className={`glass-effect p-8 rounded-2xl hover-glow relative ${
                  pkg.featured ? 'border-2 border-gold scale-105' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: pkg.featured ? 1.05 : 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-6 py-2 rounded-full font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gold mb-2">{pkg.title}</h4>
                  <div className="text-4xl font-bold text-white mb-1">{pkg.price}</div>
                  <div className="text-gold text-sm font-medium">{pkg.duration}</div>
                  <p className="text-gray-400 mt-3">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full font-semibold ${
                    pkg.featured 
                      ? 'bg-gold hover:bg-yellow-500 text-black' 
                      : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  Choose {pkg.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-2xl font-semibold text-gold mb-4">Need a Custom Package?</h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every event is unique. Let's discuss your specific requirements and create a personalized 
            package that fits your needs and budget perfectly.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-gold hover:bg-yellow-500 text-black font-semibold px-8 py-3"
            size="lg"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
