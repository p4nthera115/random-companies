import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function Background({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <button
        onClick={() => setActive(false)}
        className={`h-full w-full bg-white/40 fixed z-20 blur-lg ${
          active ? "block opacity-100" : "opacity-0 pointer-events-none"
        } transition duration-50000 ease-in`}
      ></button>
      <div className="bg-gradient-to-t from-white/50 to-transparent w-full h-1/4 fixed z-10 bottom-0"></div>
      <Image
        src={"/augen-bg.png"}
        alt="bg-image"
        fill={true}
        className={`object-contain object-bottom border-black bg-fixed ${
          active && "blur-lg"
        } transition duration-500 ease-in`}
      />
    </>
  );
}
