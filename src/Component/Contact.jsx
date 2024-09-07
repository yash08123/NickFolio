const Contact = () => {
  return (
    <div className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[50vh] w-full p-4 sm:p-6 md:p-8 overflow-x-hidden">
      <div className="absolute inset-3 bg-[#D8E5F1] border border-[#383838] rounded-b-[10px] sm:rounded-b-[12px] lg:rounded-b-[13px]"></div>

      <div className="relative font-serif  z-10 text-[#242424] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        Stay In Touch.
      </div>

      <div className="relative z-10 mt-4 sm:mt-6 border-b border-[#242424] w-full max-w-8xl"></div>

      <div className="relative z-10 mt-3 sm:mt-4">
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          LinkedIn ⌁
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          Behance ⌁
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          Github ⌁
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          mahajnnchikt@gmail.com ⌁
        </div>
      </div>

      <div className="relative z-10 mt-6 sm:mt-8 text-right max-w-5xl ml-auto">
        <span className="text-black text-sm sm:text-base md:text-lg font-bold leading-relaxed block">
          © 2024. Nachiket Mahajan
        </span>
        <span className="text-black text-sm sm:text-base md:text-lg font-light leading-relaxed block">
          designed and developed by nachiket mahajan.
        </span>
      </div>
    </div>
  );
};

export default Contact;
