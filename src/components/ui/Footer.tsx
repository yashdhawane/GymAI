import { motion } from "framer-motion";
import { FC, FormEvent } from "react";

const Footer: FC = () => {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Wave Separator */}
      <div className="w-full">
        <svg className="w-full h-20 fill-gray-900 transform rotate-180" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div>
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                FITNESS<span className="text-[#fecf3c]">GYM</span>
              </h2>
              <p className="mt-4 text-gray-400 font-space-grotesk">
                Transform your body, transform your life. Join us on your fitness journey.
              </p>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-[#fecf3c] transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {/* Social Icons */}
                  {social === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    </svg>
                  )}
                  {social === 'youtube' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-space-grotesk">Quick Links</h3>
            <ul className="space-y-4">
              {['Classes', 'Schedule', 'Pricing', 'Trainers', 'About Us'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#fecf3c] transition-colors duration-300 flex items-center font-space-grotesk"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-space-grotesk">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-center font-space-grotesk">
                <div className="bg-[#fecf3c]/10 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                123 Fitness Street, NY 10001
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center font-space-grotesk">
                <div className="bg-[#fecf3c]/10 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                (555) 123-4567
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center font-space-grotesk">
                <div className="bg-[#fecf3c]/10 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@fitnessgym.com
              </motion.li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-space-grotesk">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <p className="text-gray-400 font-space-grotesk">Subscribe for the latest updates and offers.</p>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fecf3c] font-space-grotesk"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bg-[#fecf3c] text-black px-4 py-1 rounded-md hover:bg-[#fecf3c]/90 transition-colors duration-300 font-space-grotesk"
                >
                  Join
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-space-grotesk">
              © {new Date().getFullYear()} FitnessGym. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-[#fecf3c] text-sm transition-colors duration-300 font-space-grotesk">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#fecf3c] text-sm transition-colors duration-300 font-space-grotesk">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#fecf3c] text-sm transition-colors duration-300 font-space-grotesk">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 