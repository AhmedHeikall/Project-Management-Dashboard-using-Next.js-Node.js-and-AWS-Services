"use client";
import { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div
      className="fixed flex flex-col justify-between shadow-xl transition-all
    duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64"
    >
      {/* container */}
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* logo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TaskPilot
          </div>
        </div>

        {/* team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src={`/logo.png`}
            alt="logo"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-white">
              AHMED TEAM
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                private
              </p>
            </div>
          </div>
        </div>

        {/* navbar links */}
      </div>
    </div>
  );
};

export default Sidebar;
