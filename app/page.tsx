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
        </div>
      </div>
  );
}