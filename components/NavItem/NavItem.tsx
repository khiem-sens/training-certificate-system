import React from "react";

interface NavItemProps {
  label: string;
  iconSrc: string;
  section: string;
  isActive: boolean;
  onClick: (section: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, iconSrc, section, isActive, onClick }) => {
  return (
    <div
      onClick={() => onClick(section)}
      className={`relative flex items-center p-2 md:p-4 cursor-pointer w-fit overflow-hidden transition-all duration-300 ease-in-out ${
        isActive ? 'bg-gray-100' : 'bg-transparent'
      }`}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt={`${label} Icon`}
        className="w-5"
      />
      <span className={`ml-2 transition-colors duration-300 ease-in-out ${
        isActive ? 'font-bold text-blue-800' : 'text-gray-600'
      }`}>
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-1 w-full bg-blue-800 transition-transform duration-300 ease-in-out ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
};

export default NavItem;
