import React from "react";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3 w-full bg-white border-b border-zinc-300 z-10 whitespace-nowrap md:px-20">
      <img
        loading="lazy"
        src="/images/logo.svg"
        alt="Company Logo"
        className="w-[74px] aspect-[2.65] object-contain"
      />
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
