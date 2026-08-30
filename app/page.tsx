"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard/stats")
        .then((res) => res.json())
        .then((data) => setStats(data));
  }, []);

  return (
      <div className="bg-black flex">
        <div className="bg-red-500 h-screen fixed w-60"></div>
        <div className="bg-yellow-500 w-full">
          <div className="bg-green-500 h-16 w-full"></div>
          <div className="bg-blue-500 h-24 w-full"></div>
          <div className="bg-pink-600 h-72 w-full"></div>
          <div className="bg-purple-500 h-71 w-full"></div>
        </div>
      </div>
  );
}