import { motion } from 'motion/react';

export default function BottomRightCorner() {
  return (
    <motion.div
      id="bottom-right-corner"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute -bottom-[1px] -right-[1px] p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 z-10"
    >
      {/* CRITICAL corner masks to include inside this container */}
      
      {/* Top intersection mask */}
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0"/>
        </svg>
      </div>

      {/* Left intersection mask */}
      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0"/>
        </svg>
      </div>

      {/* Circle Icon */}
      <div className="bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)] overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7 md:w-10 md:h-10 text-[rgba(30,50,90,0.9)]"
          fill="currentColor"
        >
          {/* Central sun core */}
          <circle cx="50" cy="50" r="16" />
          
          {/* Programmatically rotated wavy boho rays */}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16;
            const isEven = i % 2 === 0;
            return (
              <path
                key={i}
                d={
                  isEven
                    ? "M 47 34 C 41 20, 59 12, 50 2 C 55 16, 48 22, 53 34 Z"
                    : "M 48 35 C 44 24, 56 18, 50 14 C 53 22, 49 26, 52 35 Z"
                }
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Info Column */}
      <div className="flex flex-col select-none">
        <span className="text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]">
          Documentation
        </span>
      </div>
    </motion.div>
  );
}
