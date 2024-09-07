import MySVG from "../assets/img.svg";
import { Image } from "@nextui-org/react";

const Skill = () => {
  return (
    <div className="w-full min-h-screen bg-[#F0F8FF] flex items-center justify-center p-4 overflow-x-hidden">
      <div className="box w-full h-full max-w-[1400px] mx-auto flex flex-col py-20 md:flex-row border border-[#383838] rounded-[13px]">
      
        <div className="flex-1 flex flex-col justify-center p-6">
          <div className="text-[#121212] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 font-serif">
            I’ve acquired a diverse set of skills
          </div>
          <div className="text-[#121212] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            and I hone them every day.
            <br />
            Currently, I’m learning React Native and some backend development.
            <br />
            〙«» ›‹ «»〘
          </div>
        </div>


        <div className="flex-1 flex items-center justify-center p-6">
          <Image
            src={MySVG}
            alt="Skill Illustration"
            className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
