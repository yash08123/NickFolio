
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mind Mosaic Web Design & Development",
      role: "@ Product Design/Development",
      description:
        "The MindMosaic project is a web-based platform designed to offer an interactive and engaging user experience for mental health and well-being. The application focuses on helping users visualize and manage their thoughts, emotions, and mental patterns through an intuitive and user-friendly interface.",
      image: "Mindmosic.png",
    },
    {
      id: 2,
      title: "Redesign SRCS Landing Page",
      role: "@ Product Design",
      description:
        "I redesigned the landing page for a prestigious co-ed boarding school to create a more engaging and modern user experience. The new design features a streamlined layout with a full-width hero image, enhanced navigation, and clear calls to action. By improving the visual hierarchy and utilizing a refined color palette, the redesign effectively highlights the school’s values and offerings, ensuring a seamless experience across devices.",
      image: "SRCS.png",
    },
    {
      id: 3,
      title: "Gamerz App Design",
      role: "@ Product Design",
      description:
        "I designed Gamerz, an innovative app for online gaming tournaments and live streaming of e-sports events. The platform allows gamers to participate in competitive tournaments and watch live streams of their favorite games. My design focused on creating a dynamic and immersive user experience, with intuitive navigation, real-time updates, and interactive features that engage the gaming community. The interface is sleek and modern, reflecting the fast-paced world of e-sports.",
      image: "Gamerz.png",
    },
    {
      id: 4,
      title: "Fit Track App Design",
      role: "@ Product Design",
      description:
        "I designed FitTrack, an advanced app for tracking workouts and analyzing health metrics. The platform enables users to log their exercises, monitor performance, and gain insights into their overall health. My design emphasized creating a seamless and engaging user experience, with features such as intuitive navigation, detailed analytics, and personalized recommendations. The interface is clean and modern, ensuring that users can easily manage and enhance their fitness routines.",
      image: "Fittrack.png",
    },
    {
      id: 5,
      title: "Nixor Obex Web Design",
      role: "@ Product Design",
      description:
        "I contributed to designing an intuitive and secure user interface for Nixor Obex, a platform revolutionizing digital transaction management. My focus was on creating a seamless experience across devices, ensuring that users could navigate payments and authentication processes effortlessly. The design prioritized clarity and accessibility, making advanced features approachable while maintaining robust security. By balancing innovation with user-centric design, I helped deliver a platform that combines functionality with ease of use.",
      image: "Nixorobex.png",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="text-[#FF0000] text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
        ⁄⁄ Projects
      </div>

      <Accordion>
        {projects.map((project) => (
          <AccordionItem
            key={project.id}
            aria-label={project.title}
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src={project.image}
                css={{ size: "$16" }}
              />
            }
            className="font-bold font-serif"

            title={project.id +"."+ project.title}
          >
            <div className="flex flex-col lg:flex-row border border-[#383838] rounded-lg p-4 space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1 lg:w-1/2 flex flex-col space-y-4">
                <div className="text-[#FF0000] text-2xl md:text-3xl lg:text-4xl font-bold">
                  {project.title}
                </div>
                <div className="text-[#121212] text-xl md:text-2xl lg:text-3xl font-light">
                  {project.role}
                </div>
                <div className="text-[#121212] text-lg md:text-xl lg:text-2xl font-light">
                  {project.description}
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
