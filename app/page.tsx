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
      <pre>{JSON.stringify(stats, null, 2)}</pre>
  );
}