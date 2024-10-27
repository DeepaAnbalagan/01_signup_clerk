"use client";
import React, { useEffect, useState } from "react";

export default function SideLayout() {
  //   const [dateTime, setDateTime] = useState(new Date().toLocaleTimeString());

  //   useEffect(() => {
  //     const timer = setInterval(
  //       () => setDateTime(new Date().toLocaleTimeString()),
  //       1000
  //     );
  //     return () => clearInterval(timer); // Clear interval on component unmount
  //   }, []);

  return (
    <aside className="w-1/4 bg-gray-800 text-white p-6 flex flex-col items-center h-screen">
      <h2 className="text-lg font-bold mb-4">Today’s Date & Time</h2>
    </aside>
  );
}
