import { SidebarContext } from "@/app/courses/page";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState, ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}
export default function Sidebar({
  children,
  expanded,
  setExpanded,
}: SidebarProps) {
  return (
    <>
      <aside
        className={`${
          expanded ? "w-64" : "w-20"
        } fixed  z-50 transition-all ease-in-out duration-300 h-screen`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="h-[64px] flex items-center justify-between">
            <p>Logo</p>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex  p-3">
            <p>Logo</p>
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">
                  constgenius@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
