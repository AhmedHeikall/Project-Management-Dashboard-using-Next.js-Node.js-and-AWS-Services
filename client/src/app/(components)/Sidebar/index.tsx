"use client";
import { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";

import SidebarLinks from "./sidebarLinks";
import { setIsSideBarCollapsed } from "@/state";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div
      className={`fixed flex flex-col justify-between shadow-xl transition-all
    duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`}
    >
      {/* container */}
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* logo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TaskPilot
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSideBarCollapsed(!isSidebarCollapsed));
              }}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
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
        <nav className="z-10 w-full">
          <SidebarLinks icon={Home} label="Home" href="/" />
          <SidebarLinks icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLinks icon={Search} label="Search" href="/search" />
          <SidebarLinks icon={Settings} label="Settings" href="/settings" />
          <SidebarLinks icon={User} label="Users" href="/users" />
          <SidebarLinks icon={Users} label="Teams" href="/teams" />
        </nav>

        {/* projects */}
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500 dark:text-white"
        >
          <span className="">Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {/* projects list */}
        {showProjects && <></>}

        {/* priority */}
        <button
          onClick={() => setShowPriority((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500 dark:text-white"
        >
          <span className="">Priorites</span>
          {showPriority ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {/* priority list */}
        {showPriority && (
          <>
            <SidebarLinks
              icon={AlertCircle}
              label="Urgent"
              href="/priority/urgent"
            />
            <SidebarLinks
              icon={ShieldAlert}
              label="High"
              href="/priority/high"
            />
            <SidebarLinks
              icon={AlertTriangle}
              label="Medium"
              href="/priority/medium"
            />
            <SidebarLinks
              icon={AlertOctagon}
              label="Low"
              href="/priority/low"
            />
            <SidebarLinks
              icon={Layers3}
              label="Backlog"
              href="/priority/backlog"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
