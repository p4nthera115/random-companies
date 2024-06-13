"use client";

import { useState } from "react";
import AugenSVG from "./AugenSVG";

export default function Header() {
  return (
    <div className="w-full h-36  absolute flex justify-center items-center">
      <div className="h-full w-[45%] rounded-lg flex flex-row gap-2 items-end p-4">
        <button className="rounded-full h-[4rem] w-[4.5rem] flex bg-black/5 justify-center items-center overflow-hidden">
          <div className="scale-[200%]">
            <AugenSVG />
          </div>
        </button>
        <Menu />
      </div>
    </div>
  );
}

function Menu() {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const menuArr = ["Wearable", "Neural", "Programs", "Updates", "Search"];

  return (
    <div className="w-full h-[4rem] bg-black/5 rounded-2xl flex flex-row justify-center gap-20 items-center text-xl font-bold">
      {menuArr.map((item, i) => (
        <button
          onMouseEnter={() => {
            setId(i);
            setHover(true);
          }}
          onMouseLeave={() => {
            setId(null);
            setHover(false);
          }}
          className={`${
            hover && id !== i ? "text-black/40" : "text-black"
          } transition`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
