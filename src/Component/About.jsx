import cardImage from "../image/card-img.png";
import { Image } from "@nextui-org/react";

const About = () => {
  return (
    <div id="Scroll" className="w-full min-h-screen px-4 py-6 bg-[#F0F8FF] flex justify-center items-center overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-8xl">
        <div className="relative flex-1 mb-8 md:mb-0">
          <div className="relative w-full bg-transparent rounded-xl border border-black p-4 h-full flex items-center justify-center">
            <div className="absolute top-4 left-4 text-[#121212] text-sm md:text-base font-normal">
              Trading Card
            </div>
            <div className="absolute bottom-4 right-4 text-[#121212] text-sm md:text-base font-normal">
              2024-25
            </div>
            <Image
              className="w-6/12 md:w-9/12 lg:w-10/12 mx-auto shadow-lg "
              src={cardImage}
              alt="Card"
            />
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative w-full bg-transparent rounded-[13px] border border-[#383838] p-4">
            <div className="absolute -top-4 left-5 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal">
              whoami
            </div>
            <div className="details mt-12 overflow-auto">
              <div className="relative text-[#121212] font-light">
                <div className="text-xl md:text-2xl lg:text-2xl font-semibold m-6">
                  Nachiket
                </div>
                <div className="text-sm md:text-base lg:text-lg leading-relaxed m-6 ">
                  <div>
                    <strong>Name:</strong> Nachiket – engineer and designer
                  </div>
                </div>
                <div className="description2 mt-10 text-[#121212] p-4 leading-relaxed break-words">
                  <div className="text-base md:text-lg font-semibold">
                    Description
                  </div>
                  <div className="text-sm md:text-base leading-relaxed mt-2">
                    From a young age, I’ve been captivated by the blend of
                    creativity and technology. The magic of turning ideas into
                    visually engaging and intuitive digital experiences drew me
                    towards the world of UI/UX design & development. Over time,
                    I’ve developed a deep passion for crafting seamless user
                    interfaces and efficient workflows. My journey has equipped
                    me with a strong foundation in tools. My approach is
                    centered on user-centered design principles, ensuring
                    visually appealing and meaningful projects for end-users,
                    bringing fresh perspectives and innovative ideas to the
                    evolving digital product design world.
                  </div>
                </div>
                <div className="mt-10 text-[#121212] p-4 ">
                  <div className="text-base md:text-lg font-semibold">
                    Usage
                  </div>
                  <div className="text-sm md:text-base text-center mt-2">
                    Currently, Nachiket is being applied in the following
                    contexts:
                  </div>
                  <div className="text-xs md:text-sm text-center mt-2">
                    Nachiket [UI/UX Design, Figma, Wireframing, Prototyping]{" "}
                    <br />
                    [React, React Native, Front-End Development]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
