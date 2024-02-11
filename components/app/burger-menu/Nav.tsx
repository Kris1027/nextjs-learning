"use client";
import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="flex">
      {matches && (
        <div className="flex gap-12">
          <a href="/">home</a>
          <a href="/services">services</a>
          <a href="/contact">contact</a>
        </div>
      )}

      {!matches && (
        <div
          className="space-y-1 cursor-pointer z-50"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}

      {toggled && !matches && (
        <div className="fixed flex justify-center items-center bg-white bottom-0 left-0 w-full h-screen">
          <div className="flex flex-col gap-24 text-lg">
            <a href="/">home</a>
            <a href="/services">services</a>
            <a href="/contact">contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
