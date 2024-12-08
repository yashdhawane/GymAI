import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0  z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source 
            src="Interior-WTF_1280.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        </div>
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between mr-6 ml-6 p-4 bg-transparent">
      {/* Logo Section (Left) */}
      <div className="flex items-center">
        <img 
          src="gymsvg.svg" 
          alt="Company Logo" 
          className="h-30 w-30"
        />
       
      </div>

      {/* Menu Items (Center) */}
      <div className="flex space-x-6 items-center justify-end">
        
        <a href="#" className="text-white text-lg font-semibold italic hover:text-[#fecf3c] transition-colors flex items-center">
          Classes
        </a>
        <a href="#" className="text-white text-lg font-semibold italic hover:text-[#fecf3c] transition-colors flex items-center">
          Schedule
        </a>
        <a href="#" className="text-white text-lg font-semibold italic hover:text-[#fecf3c] transition-colors flex items-center">
          Trainers
        </a>
        <a href="#" className="text-white text-lg font-semibold italic hover:text-[#fecf3c] transition-colors flex items-center">
          Products
        </a>
        <a href="#" className="text-white text-lg font-semibold italic hover:text-[#fecf3c] transition-colors flex items-center">
          About
        </a>
        
        {/* CTA Section (Right) */}
        <div className="flex gap-2">
          <button className="bg-[#fecf3c] text-gray-900 px-6 py-2 rounded-md hover:bg-[#fdd55f] transition-colors font-semibold">
            Get Started
          </button>
        </div>
      </div>

     
    </nav>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4"
    >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-[8rem] leading-none font-black mb-6 max-w-5xl mx-auto tracking-tighter uppercase"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          {/* First Line - TRANSFORM */}
          <span className="block relative">
            <span className="absolute -z-10 left-0 top-0 text-[#fecf3c] transform translate-x-[3px] translate-y-[3px]">
              TRANSFORM
            </span>
            <span className="relative text-white">
              TRANSFORM
            </span>
          </span>

          {/* Second Line - YOUR BODY */}
          <span className="block relative mt-2">
            <span className="relative text-[#fecf3c]  ">
              YOUR BODY
            </span>
            <span className="absolute -z-10 left-0 top-0 text-white transform translate-x-[30px] translate-y-[3px]">
              YOUR BODY
            </span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl font-medium text-white/90 mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Break limits. Build strength. Become unstoppable.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#fecf3c] text-gray-900 px-12 py-5 rounded-md transition-all duration-300 text-xl font-bold uppercase tracking-wider hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Start Training
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white border-4 border-white px-12 py-5 rounded-md transition-all duration-300 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 hover:shadow-[6px_6px_0px_0px_rgba(254,207,60,0.8)] transform hover:-translate-y-1"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Free Trial
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;