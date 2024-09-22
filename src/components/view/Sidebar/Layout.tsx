"use client";
import Sidebar from "@/components/view/Sidebar/Sidebar";
import { SidebarItem } from "@/components/view/Sidebar/SidebarItem";
import React, { ReactNode, createContext, useState } from "react";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import Topbar from "@/components/view/Sidebar/Topbar";

interface SidebarContextProps {
  expanded: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>({
  expanded: true,
});

const CoursesPage = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-gray-100">
      <div className="flex">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <Topbar expended={expanded} setExpanded={setExpanded} />
        <div
          className={`${
            expanded ? "md:pl-64" : "md:pl-20"
          } flex-grow transition-all ease-in-out duration-300 mt-[64px] min-h-0 `}
        >
          <div>Datea </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
