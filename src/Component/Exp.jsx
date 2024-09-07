const Exp = () => {
  return (
    <div className="w-full h-screen bg-[#F0F8FF] flex justify-center items-center p-4 overflow-x-hidden">
      <div className="w-full h-full border border-[#383838] rounded-[13px] bg-transparent p-6 flex flex-col">
        <div className="text-center mb-8 font-serif">
          <span className="text-[#121212] font-bold my-10 mb-28 text-3xl sm:text-4xl md:text-5xl block">
            I’ve worked across domains
          </span>
        </div>
        <div className="space-y-12">
          {[
            {
              title: "UI/UX Designer",
              company: "@ Nixor Obex",
              dateRange: "Jun 2024 - Aug 2023",
            },
            {
              title: "UI Developer",
              company: "@ Rapportsoft Consulting & Technology",
              dateRange: "Feb 2024 - May 2023",
            },
            {
              title: "Graphic Designer",
              company: "@ Voice Over Bharat",
              dateRange: "May 2023 - Jul 2023",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              <div className="flex-1">
                <span className="text-[#FF0000] font-bold text-xl sm:text-2xl md:text-3xl font-serif">
                  {item.title}
                </span>
                <br />
                <span className="text-[#121212] font-light text-lg sm:text-xl md:text-2xl">
                  {item.company}
                </span>
              </div>
              {/* Center 'Intern' on large screens */}
              <div className="text-[#FF0000] text-center text-base sm:text-lg md:text-xl font-light sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-full">
                Intern
              </div>
              <div className="text-right text-[#121212] text-sm sm:text-base md:text-lg font-light sm:flex-1">
                {item.dateRange}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;
