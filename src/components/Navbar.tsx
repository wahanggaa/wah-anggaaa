import { motion } from 'motion/react';
import chromeMoon from '../assets/images/chrome_crescent_moon_1784465534336.jpg';

export default function Navbar() {
  return (
    <motion.nav
      id="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="w-fit px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-6 rounded-full bg-white/20 backdrop-blur-2xl border border-white/35 shadow-2xl flex items-center justify-center z-30 select-none relative mx-auto"
    >
      {/* Brand Identity with Logo */}
      <motion.div 
        className="flex items-center gap-3 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Rounded crescent moon logo */}
        <motion.div 
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/95 flex items-center justify-center border border-white/30 overflow-hidden shadow-lg"
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img
            src={chromeMoon}
            alt="Chrome Crescent Moon Logo"
            className="w-full h-full object-cover scale-110 pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Brand Name - Clean, bold, elegant modern style */}
        <span className="font-jakarta font-black tracking-tight text-lg sm:text-xl md:text-2xl text-[rgba(30,50,90,0.95)] transition-colors group-hover:text-[rgba(30,50,90,1)]">
          wah: anggaaa
        </span>
      </motion.div>
    </motion.nav>
  );
}


