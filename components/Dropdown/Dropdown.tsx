"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdminDropdown: React.FC = () => {
  const router = useRouter();
  const handleSignout = () => {
    router.push("/signout");
  };
  return (
    <nav
      onClick={handleSignout}
      className="flex overflow-hidden flex-col justify-center  w-32 max-w-full  rounded border border-solid shadow-lg border-zinc-300 text-zinc-800 "
    >
      <ul className="flex flex-col w-full">
        <li className="flex-1 shrink gap-3 self-stretch px-3 py-2 w-full">
          <button className="w-full text-left">Sign out</button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminDropdown;
