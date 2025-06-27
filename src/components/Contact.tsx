
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.phone || !formData.eventType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and event type are required.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi Leo HD Video & Studio! 

I'm interested in your photography services:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Type: ${formData.eventType}

Message: ${formData.message}

Please contact me with more details and pricing.`;

    const whatsappUrl = `https://wa.me/919443212840?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our team shortly!"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      value: "+91 9443212840",
      link: "tel:+919443212840"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+91 9443212840", 
      link: "https://wa.me/919443212840"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Cuddalore, Tamil Nadu",
      link: "https://maps.google.com/?q=Cuddalore,Tamil+Nadu"
    },
    {
      icon: "📷",
      title: "Instagram",
      value: "@leo_hd_video_cuddalore",
      link: "https://www.instagram.com/leo_hd_video_cuddalore"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs and create memories that last forever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Event Date
                  </label>
                  <Input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="bg-black/20 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full bg-black/20 border border-gray-600 text-white rounded-md px-3 py-2"
                  required
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                  <option value="Reception">Reception</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-black/20 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                  placeholder="Tell us more about your event and requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-500 text-black font-semibold py-3 hover-glow"
                size="lg"
              >
                Send Message via WhatsApp
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 glass-effect p-4 rounded-lg hover-glow transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="font-medium text-gold">{info.title}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              className="glass-effect p-4 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-gold mb-4">Our Location</h4>
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31400.234567890!2d79.7694!3d11.7527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a0b3c3c5d5d5%3A0x1234567890abcdef!2sCuddalore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Leo HD Video & Studio Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={() => window.open('tel:+919443212840')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
              >
                📞 Call Now
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/919443212840', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
              >
                💬 WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
