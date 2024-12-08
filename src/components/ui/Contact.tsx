import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-space-grotesk font-bold text-white mb-4">
            <span className="text-[#fecf3c]">Connect</span> With Us
          </h2>
          <p className="text-gray-400 font-space-grotesk text-lg">
            Find your nearest gym location and start your fitness journey today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700"
            >
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-space-grotesk font-medium">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fecf3c] transition duration-200 font-space-grotesk"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-space-grotesk font-medium">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fecf3c] transition duration-200 font-space-grotesk"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-space-grotesk font-medium">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fecf3c] transition duration-200 min-h-[150px] font-space-grotesk"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-space-grotesk font-semibold text-white transition duration-200 ${
                  isSubmitting
                    ? "bg-[#fecf3c]/70 cursor-wait"
                    : isSubmitted
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-[#fecf3c] to-[#fecf3c]/80 hover:from-[#fecf3c]/90 hover:to-[#fecf3c]"
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSubmitted
                  ? "Message Sent!"
                  : "Send Message"}
              </motion.button>

              {/* Contact Information */}
              <div className="mt-8 text-gray-400 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-4">Quick Contacts</h3>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-[#fecf3c]/10 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="font-space-grotesk">123 Fitness Street, New York, NY 10001</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-[#fecf3c]/10 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="font-space-grotesk">(555) 123-4567</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-[#fecf3c]/10 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-space-grotesk">info@fitnessgym.com</p>
                  </motion.div>
                </div>
              </div>
            </motion.form>
          </motion.div>

          {/* Map Placeholder Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700"
          >
            <div className="relative h-full min-h-[600px] bg-gray-700/50">
              {/* Map Placeholder Design */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-[#fecf3c]/10 p-4 rounded-full inline-block mb-4">
                      <svg className="w-8 h-8 text-[#fecf3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">Find Our Locations</h3>
                    <p className="text-gray-400 font-space-grotesk">Map integration will be added here</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
