import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking on a link
  };

  return (
    <nav className="fixed top-4 right-9 z-50">
      {/* Hamburger icon for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black border-2 border-black p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Vertical Navbar for medium and larger screens */}
      <ul className="hidden md:flex flex-col space-y-4 text-right">
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#home");
            }}
            className="text-lg sm:text-xl text-black hover:text-red-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#about");
            }}
            className="text-lg sm:text-xl text-black hover:text-red-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#projects");
            }}
            className="text-lg sm:text-xl text-black hover:text-red-500"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#contact");
            }}
            className="text-lg sm:text-xl text-black hover:text-red-500"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-[#F0F8FF] p-4 rounded-md shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#home");
                }}
                className="text-lg sm:text-xl text-black hover:text-red-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#about");
                }}
                className="text-lg sm:text-xl text-black hover:text-red-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#projects");
                }}
                className="text-lg sm:text-xl text-black hover:text-red-500"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#contact");
                }}
                className="text-lg sm:text-xl text-black hover:text-red-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
