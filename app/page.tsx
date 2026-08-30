"use client";
import StatsSection from "@/app/components/StatsSection/StatsSection";
import Topbar from "@/app/components/Topbar/Topbar";

export default function Home() {

  return (
      <div className="flex">
        <div className="bg-red-500 h-screen fixed w-60"></div>
        <div className="ml-60 w-full p-6 flex flex-col gap-6">
          <Topbar />
          <StatsSection />
          <div className="bg-pink-600 h-72 w-full"></div>
          <div className="bg-purple-500 h-71 w-full"></div>
        </div>
      </div>
  );
}