import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav id="navbar" className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10 select-none">
      {/* Top-left Brand Identity */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center"
      >
        <span className="font-jakarta font-extrabold tracking-tight text-2xl md:text-3xl text-[rgba(30,50,90,0.95)] hover:opacity-80 transition-opacity">
          wah: anggaaa
        </span>
      </motion.div>

      {/* Spacer to keep standard navbar layout if needed, but otherwise clean and empty */}
      <div className="flex-1" />
    </nav>
  );
}

