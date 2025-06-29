import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Video, Heart, BookOpen, Package, Star } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  
    
  const services = [
    
    {
      icon: Camera,
      title: "Traditional Photography",
      price: "₹25,000",
      description: "Classic studio and event photography with professional lighting and composition",
      features: ["Professional Equipment", "High-Resolution Images", "Advance Editing", "Digital Gallery"]
    },
    {
      icon: Video,
      
      title: "Half Day Function",
      price: "₹25,000",
      description: "Engagement, Baby Shower ,Birthday ,Puberty, Ear piercing",
      features: ["HD Video Recording", "Advance Editing", "Digital Delivery", "Highlight Reel","Senthik HD Album ->30Sheet"]
    },
    {
      icon: Heart,
      title: "Candid & Pre-Wedding",
      price: "₹25,000",
      description: "Capture natural moments and romantic pre-wedding sessions",
      features: ["Candid Photography", "Pre-Wedding Shoot", "Location Flexibility", "Creative Poses"]
    },
    {
      icon: Video,
      title: "Cinematography",
      price: "₹25,000",
      description: "Premium cinematic video production with advanced techniques",
      features: ["Cinematic Quality", "Advanced Editing", "Color Grading", "Multiple Angles"]
    },
    {
      icon: BookOpen,
      title: "Photo Albums",
      price: "₹15,000",
      description: "Beautiful custom photo albums to preserve your memories",
      features: ["Custom Design", "Premium Paper", "Professional Binding", "Various Sizes"]
    },
    {
      icon: Package,
      title: "Full Day Package",
      price: "₹50,000",
      description: "Complete photography and videography coverage for your entire event",
      features: ["Full Day Coverage", "Photo + Video", "Multiple Photographers", "All Formats"],
      popular: true
    }
  ];

  const packages = [
    {
      name: "Leo Silver Plan",
      price: "₹35,000",
      description: "Perfect for smaller events and intimate celebrations",
      features: [
        "Traditional Video",
        "Traditional Photo",
        "HD Senthik Album 40sheets",
        "Pendrive",
        "12X18 Lamanation"
      ]
    },
    {
      name: "Leo Gold Plan",
      price: "₹75,000",
      description: "Perfect for smaller events and intimate celebrations",
      features: [
        "Traditional Video",
        "Traditional Photo",
        "Candid Photo",
        "Drone",
        "Advance Editing",
        "Unlimited Photos",
        "Highlights video",
        "Senthik HD Album 50sheets",
        "Tv->2",
        "Gift ->12X18 lamanation -2,Calander",
      ]
    },
    {
      
      name: "Leo Platinum Plan",
      price: "₹99,999",
      description: "Our most popular package for complete event coverage",
      features: [
        "Traditional Video",
        "Traditional Photo",
        "Candid Photo",
        "Drone",
        "Candid Video",
        "Highlight Video",
        "Senthik HD Album ",
        "Reception and Wedding each 40-Sheet Album  (Glossy or silky Mate or Feather)",
        "Gift ->12X18 lamanation -2,Calander",
        "Outdoor shoot( post wedding)",
        "LED Wall &Tv",
        "360 video"
      ],
      
      popular: true
    }
  ];

  return (
    
    <section id="services" className="py-20 bg-gradient-to-b from-black/20 to-black/40 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional photography and videography services tailored to your needs
          </p>
        </motion.div>
        


        {/* Individual Services */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-effect p-6 rounded-2xl hover-scale relative ${
                service.popular ? 'ring-2 ring-gold-600' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <service.icon className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-gold-400 mb-2">{service.price}</div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Package Deals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-montserrat">
            <span className="text-gradient">Package Deals</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={`glass-effect p-8 rounded-2xl hover-scale relative flex flex-col ${
                  pkg.popular ? 'ring-2 ring-gold-400' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-gold-400 mb-2">{pkg.price}</div>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center gap-3">
                      <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
  href="#contact"
  className="w-full block text-center bg-gradient-to-r from-gold-500 to-gold-600 text-black py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
>
  Choose Plan
</a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
