import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://formspree.io/f/xnnvoybj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
          }, 3000);
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 bg-black/20 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-black/20 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 bg-black/20 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="mt-2 bg-black/20 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Tell us about your event, preferred dates, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-600 hover:to-gold-700 py-3 text-lg font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:9443212840" className="text-gold-400 hover:text-gold-300 transition-colors">
                      9443212840
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/919443212840"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">68.Gedilam Bypass Road</p>
                    <p className="text-gray-300">TACBEA, Cuddalore – 607002</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <a
                  href="https://www.google.com/maps/place/LEO+HD+VIDEO+%26+STUDIO/@11.7480782,79.755332,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.336631729679!2d79.755332!3d11.7480782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499955df19cff%3A0x1bb00a5144a8b3f7!2sLEO%20HD%20VIDEO%20%26%20STUDIO!5e0!3m2!1sen!2sin!4v1719398820000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
