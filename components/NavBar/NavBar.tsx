"use client";
import React, { useState, useEffect, useRef } from "react";
import AdminDropdown from "../Dropdown/Dropdown";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Create a ref for the dropdown

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex justify-between items-center px-5 w-full bg-white border-b border-zinc-300 z-10 whitespace-nowrap md:px-20">
      <img
        loading="lazy"
        src="/images/logo.svg"
        alt="Company Logo"
        className="w-[74px] aspect-[2.65] object-contain"
      />
      <nav className="flex flex-wrap items-center gap-1 flex-1 ml-10 text-blue-800">
        <div className="flex items-center gap-2 p-2 md:p-4 border-b-4 border-blue-800 bg-gray-100 w-32 md:w-40">
          <img
            loading="lazy"
            src="/icons/certificate.svg"
            alt="Certificates Icon"
            className="w-5"
          />
          <span className="font-bold">Certificates</span>
        </div>
        <div className="flex items-center gap-2 p-2 md:p-4 w-44">
          <img
            loading="lazy"
            src="/icons/organizations.svg"
            alt="Organizations Icon"
            className="w-5"
          />
          <span>Organizations & Courses</span>
        </div>
      </nav>
      <div className="flex items-center gap-2 relative" ref={dropdownRef}>
        <img
          loading="lazy"
          src="/images/avatar.svg"
          alt="Avatar"
          className="w-6 aspect-square object-contain"
        />
        <div className="relative flex items-center gap-2">
          <div
            onClick={handleDropdownToggle}
            className="text-blue-800 w-24 h-6 cursor-pointer"
          >
            Admin_name
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-zinc-300 rounded shadow-lg">
              <AdminDropdown />
            </div>
          )}
          <img
            loading="lazy"
            src="/icons/vector.svg"
            alt="Dropdown arrow"
            className={`w-[11px] h-[6px] aspect-square object-contain cursor-pointer transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={handleDropdownToggle}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
