import { motion } from 'motion/react';
import takoIcon from '../assets/images/tako_icon_1784399126380.jpg';

export default function BottomLeftCard() {
  return (
    <motion.div
      id="centered-dock-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 sm:p-6 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-white/20 backdrop-blur-2xl flex items-center justify-center border border-white/35 shadow-2xl z-20"
    >
      {/* Row of Icon Buttons with Labels below */}
      <div className="flex items-center gap-8 sm:gap-10 md:gap-12">
        
        {/* Discord Column */}
        <div className="flex flex-col items-center gap-2">
          <motion.a
            href="https://discord.gg/wNmhh6v47"
            target="_blank"
            rel="noopener noreferrer"
            id="discord-btn"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center hover:bg-white/95 shadow-md transition-all duration-200 cursor-pointer border border-white/20 group"
            title="Discord"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[rgba(30,50,90,0.8)] fill-current transition-colors group-hover:text-[rgba(30,50,90,1)]"
              viewBox="0 0 127.14 96.36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2.07a75.16,75.16,0,0,0,72.9,0c.8.73,1.63,1.42,2.51,2.07a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
            </svg>
          </motion.a>
          <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[rgba(30,50,90,0.8)] tracking-wide select-none font-jakarta">
            Discord
          </span>
        </div>

        {/* Tako Column */}
        <div className="flex flex-col items-center gap-2">
          <motion.a
            href="https://tako.id/wah.anggaaa"
            target="_blank"
            rel="noopener noreferrer"
            id="tako-btn"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center hover:bg-white/95 shadow-md transition-all duration-200 cursor-pointer border border-white/20 overflow-hidden p-0"
            title="Tako"
          >
            <img
              src={takoIcon}
              alt="Tako"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </motion.a>
          <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[rgba(30,50,90,0.8)] tracking-wide select-none font-jakarta">
            Tako
          </span>
        </div>

      </div>
    </motion.div>
  );
}
