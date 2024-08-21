import React from "react";

const NavBar = () => {
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
      <div className="flex items-center gap-1">
        <img
          loading="lazy"
          src="/images/avatar.svg"
          alt="Avatar"
          className="w-6 aspect-square object-contain"
        />
        <div className="text-blue-800 w-24 h-6">Admin_name</div>
        <img
          loading="lazy"
          src="/icons/vector.svg"
          alt="Dropdown arrow"
          className="w-[11px] h-[6px] aspect-square object-contain"
        />
      </div>
    </header>
  );
};

export default NavBar;
