import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Youtube,Instagram, Calendar, Users, Award, Clock } from 'lucide-react';

const WatchWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Wedding Highlights",
      description: "Cinematic wedding stories that capture every emotion",
      duration: "5 minutes",
      thumbnail: "1st.png",
      views: "500+",
      category: "Wedding",
      videoUrl: "https://youtu.be/pW9bS8mlFRY?si=nLN2y5EoLPL5gxBL"
    },
    {
      title: "Pre-Wedding Collection",
      description: "Romantic pre-wedding shoots in stunning locations",
      duration: "3-4 minutes",
      thumbnail: "2nd.png",
      views: "200+",
      category: "Wedding",
      videoUrl: "https://youtu.be/UVyA7IgT3Y4?si=vuFMcMf-voqTXN_Y"
    },
    {
      title: "Birth Day",
      description: "Complete event documentation with professional editing",
      duration: "2-3 minutes",
      thumbnail: "3rd.png",
      views: "500+",
      category: "Events",
      videoUrl: "https://youtu.be/ylhASgF6m6I?si=D0yfTXdA-KsKSFbD"
    },
    {
      title: "Wedding",
      description: "Professional studio photography showcase",
      duration: "5-6 minutes",
      thumbnail: "4th.png",
      views: "1.5K+",
      category: "Wedding",
      videoUrl: "https://youtu.be/nkLl3IcahN8?si=OTujQHPUk7yS94Ur"
    }
  ];

  const stats = [
    { icon: Calendar, value: "25+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Events Covered" },
    { icon: Award, value: "HD/4K", label: "Quality Standard" },
    { icon: Play, value: "20000+", label: "Video Projects" }
  ];

  return (
    <section id="watch-work" className="py-20 bg-gradient-to-b from-black/40 to-black/20 relative">
      <div id="watch" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Watch Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the quality and artistry of Leo HD through our showcase of cinematic wedding films, 
            event highlights, and professional photography collections
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-4 rounded-xl text-center"
              >
                <stat.icon className="h-8 w-8 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {highlights.map((video, index) => (
            <motion.a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden hover-scale group cursor-pointer block"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-gold-500 text-black p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {video.category}
                    </span>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Clock className="h-4 w-4" />
                      {video.duration}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Play className="h-4 w-4" />
                      {video.views} views
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{video.description}</p>
                <div className="w-full bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-500/30 text-gold-400 py-2 rounded-full font-semibold hover:from-gold-500/30 hover:to-gold-600/30 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" />
                  Watch Now
                </div>
              </div>
            </motion.a>
          ))}
        </div>
<div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* YouTube Channel Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <Youtube className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Visit Our YouTube Channel</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Subscribe to see more of our latest work, behind-the-scenes content, and client testimonials
            </p>
            <a
              href="https://www.youtube.com/@LeoHDvideoCuddalore1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Youtube className="h-5 w-5" />
              Subscribe Now
            </a>
          </div>
        </motion.div>
        

        {/* Instagram Integration */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="text-center"
>
  <div className="glass-effect p-8 rounded-2xl inline-block">
    <Instagram className="h-16 w-16 text-pink-500 mx-auto mb-4" />
    <h3 className="text-2xl font-bold text-white mb-2">Follow Us on Instagram</h3>
    <p className="text-gray-300 mb-6 max-w-md">
      Explore our photo shoots, studio highlights, and creative edits on Instagram.
    </p>
    <a
      href="https://www.instagram.com/leo_hd_video_cuddalore/" // replace with actual handle
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto"
    >
      <Instagram className="h-5 w-5" />
      Follow Now
    </a>
  </div>
</motion.div>
</div>
      </div>
    </section>
  );
};

export default WatchWork;
