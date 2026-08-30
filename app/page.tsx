"use client";
import StatsSection from "@/app/components/StatsSection/StatsSection";

export default function Home() {

  return (
      <div className="flex">
        <div className="bg-red-500 h-screen fixed w-60"></div>
        <div className="ml-60 w-full">
          <div className="bg-green-500 h-16 w-full"></div>
          <StatsSection />
          <div className="bg-pink-600 h-72 w-full"></div>
          <div className="bg-purple-500 h-71 w-full"></div>
        </div>
      </div>
  );
}