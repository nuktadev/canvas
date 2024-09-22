import { ChevronFirst, ChevronLast } from "lucide-react";
import React from "react";

const Topbar = ({
  expended,
  setExpanded,
}: {
  expended: boolean;
  setExpanded: any;
}) => {
  return (
    <header
      className={`${
        expended ? "left-64" : "left-20"
      } bg-gray-300  fixed w-full h-[64px]  z-20 shadow-[0px_px_4px_px_rgba(0,0,0,0.15)] flex items-center justify-between`}
    >
      <button
        onClick={() => setExpanded((curr: any) => !curr)}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
      >
        {expended ? <ChevronFirst /> : <ChevronLast />}
      </button>
    </header>
  );
};

export default Topbar;
