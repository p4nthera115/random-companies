"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import AugenSVG from "./AugenSVG";

export default function Header({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-[850px] h-[250px] absolute flex justify-self-center justify-center items-center mt-10">
      <div className="h-full w-full rounded-lg flex flex-row gap-2 p-4">
        <button className="rounded-full h-[4rem] w-[4.5rem] flex bg-black/5 justify-center items-center overflow-hidden">
          <div className="scale-[200%]">
            <AugenSVG />
          </div>
        </button>
        <Menu active={active} setActive={setActive} />
      </div>
    </div>
  );
}

function Menu({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const menuArr = ["Wearable", "Neural", "Programs", "Updates", "Search"];

  return (
    <div className="w-full h-[250px] rounded-2xl flex flex-row  justify-center gap-20  text-xl font-bold relative overflow-hidden z-50">
      <motion.div
        animate={
          active
            ? {
                opacity: 0,
              }
            : {
                opacity: 1,
              }
        }
        transition={{
          ease: "circInOut",
          duration: 0.5,
          delay: !active ? 0.5 : 0,
        }}
        className="w-full h-[4rem] bg-black/5 rounded-2xl flex flex-row justify-center gap-20 items-center text-xl font-bold relative"
      >
        {menuArr.map((item, i) => (
          <button
            onClick={() => setActive(!active)}
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
      </motion.div>
      <ActiveMenu active={active} setActive={setActive} />
    </div>
  );
}

function ActiveMenu({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{
        height: 0,
      }}
      animate={
        active
          ? {
              height: "250px",
            }
          : { height: 0 }
      }
      transition={{
        ease: "circInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="absolute w-full bg-black/5 rounded-2xl flex flex-row justify-center gap-20 items-center text-xl font-bold self-start z-20"
    >
      <div></div>
    </motion.div>
  );
}
