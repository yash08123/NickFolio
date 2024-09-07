import { useState, useEffect } from "react";
import About from "./Component/About";
import Exp from "./Component/Exp";
import Scroll from "./assets/Scroll.svg";
import Nachiket from "./assets/Nachiket.svg";
import { Image } from "@nextui-org/react";
import Skill from "./Component/Skill";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      {/* Hamburger Icon */}
      <div
        className="cursor-pointer text-3xl font-bold text-black relative"
        onClick={toggleMenu}
      >
        ☰
      </div>

      {/* Menu Items */}
      {isOpen && (
        <div className="fixed top-16 right-5 bg-white p-4 rounded-lg shadow-lg z-50 flex flex-col items-end space-y-4">
          <a href="#home" className="text-lg font-bold text-black" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="text-lg font-bold text-black" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className="text-lg font-bold text-black" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-lg font-bold text-black" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const coords = { x: 0, y: 0 };

    const animateCircles = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;

      circles.forEach((circle, index) => {
        setTimeout(() => {
          circle.style.left = `${coords.x - circle.offsetWidth / 2}px`;
          circle.style.top = `${coords.y - circle.offsetHeight / 2}px`;
        }, index * 70); // Delay each circle's movement
      });
    };

    window.addEventListener("mousemove", animateCircles);

    return () => {
      window.removeEventListener("mousemove", animateCircles);
    };
  }, []);

  return (
    <>
      <div className="bg-[#F0F8FF] overflow-x-hidden pr-4">
        {/* Fixed Navbar */}
        <Navbar />

        <div id="home" className="home-container m-10 mt-5 rounded-2xl border-2 border-black">
          <div className="h-screen m-5 rounded-xl border-2 border-black">
            <div className="logo-container flex justify-center items-center h-screen ">
              <img
                src={Nachiket}
                className="h-80% w-full sm:w-1/2"
                alt="Logo"
              />
            </div>
            <div className="rectangle absolute top-1/2 mt-36 w-full flex justify-center items-center">
              <div className="box absolute bg-[#F0F8FF] bg-opacity-75 rounded-full border-2 border-black py-2 flex justify-center items-center mr-36">
                <span className="text-black text-sm sm:text-2xl mx-5">
                  UI/UX Designer & Developer
                  <span className="text-red-500">™</span>
                </span>
              </div>

              <div className="scroll-container absolute top-60 right-36 mr-2">
                <a href="#Scroll">
                  <Image src={Scroll} alt="Scroll Down" />
                </a>
              </div>
            </div>
          </div>

          <div id="about">
            <About />
          </div>

          <div id="exp">
            <Exp />
          </div>

          <div id="skills">
            <Skill />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>

      <div className="circle-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  );
};

export default App;
