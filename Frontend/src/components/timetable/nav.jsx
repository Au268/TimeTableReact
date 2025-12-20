import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle Drawer on button click
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[var(--primary-600)] text-white px-4 py-3 flex justify-between items-center shadow-md relative">
      <span className="font-semibold text-lg">
        Department of SE - Timetable
      </span>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleDrawer}
        className="sm:hidden focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-4">
        <Link
          to="/dashboard"
          className="border border-[var(--primary-600)] bg-[var(--primary-50)] text-[var(--primary-600)] px-4 py-2 rounded-md font-medium
          hover:bg-[var(--primary-200)] hover:text-[var(--primary-700)] hover:border-[var(--primary-700)]
          transition-colors duration-200"
        >
          Go Back
        </Link>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`absolute top-full right-0 w-48 bg-white text-[var(--primary-600)] shadow-md rounded-md mt-1 p-2 flex-col gap-2 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a href="/dashboard">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-[var(--primary-50)]">
            Go Back
          </button>
        </a>
        {/* <a href="logout/student">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-[var(--primary-50)]">
            Logout
          </button>
        </a> */}
      </div>
    </nav>
  );
};

export default Nav;
